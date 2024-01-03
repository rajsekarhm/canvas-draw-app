import { useCallback, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DrawText from '~/components/Shapes/DrawText';
import { getElementsAtPosition } from '~/components/utils/getElementsAtPosition';
import { changeToOneScalingFactor } from '~/components/utils/redrawCanvas';
import { UPDATE_CANVAS_AREA } from '../DrawAreaContext';
import useEventListener from './useEventListener';

function isTextType(enclosedElement) {
  return enclosedElement && enclosedElement.type === 'text';
}

function getUpdatedShapes(shapes, enclosedElement) {
  if (isTextType(enclosedElement)) {
    console.log('Exisiting');
    return shapes.filter(shape => shape.id !== enclosedElement.id);
  }
  return shapes;
}

function getTextId(enclosedElement) {
  return isTextType(enclosedElement) ? enclosedElement.id : uuidv4();
}

function useTextTool({ scrollX, scrollY, shapes, scalingFactor, tool, tempCanvas, selectedTheme, imgUpdate, dispatch }) {
  let selectedTextEle = useRef(null);

  function changeToTextTool(ev) {
    console.trace();
    ev._x = ev.x;
    ev._y = ev.y;

    let enclosedElement = getElementsAtPosition(changeToOneScalingFactor(ev.x - scrollX, scalingFactor), changeToOneScalingFactor(ev.y - scrollY, scalingFactor), shapes);

    let textId = getTextId(enclosedElement);
    let updatedShapes = getUpdatedShapes(shapes, enclosedElement);

    selectedTextEle.current = isTextType(enclosedElement) ? enclosedElement.id : null;

    let tempContext = tempCanvas.current.getContext('2d');
    tool.current = new DrawText(tempCanvas.current, tempContext, imgUpdate, textId, selectedTheme);
    console.log(tool.current);
    // Problem: Might be a problem with mobile device
    let eventMapping = ev.type === 'touchstart' ? 'dblclick' : 'dblclick';
    let func = tool.current[eventMapping];
    if (func) {
      tempContext.clearRect(0, 0, tempCanvas.current.width, tempCanvas.current.height);
      console.log('Inside Fn', func);
      func(ev, enclosedElement, { scrollX: scrollX, scrollY: scrollY, scalingFactor: scalingFactor });
    }

    console.log('Main', tool.current);

    dispatch({
      type: UPDATE_CANVAS_AREA,
      payload: {
        selectedTool: 'text',
        shapes: updatedShapes
      }
    })
  }

  useEventListener('dblclick', changeToTextTool, tempCanvas, false);
}

export default useTextTool;