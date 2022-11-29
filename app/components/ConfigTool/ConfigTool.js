import React, { useState } from 'react';
import Collaborators from '../Collaborators/Collaborators';
import { useMatchMedia } from '../Common/hooks/useMatchMedia';
import ThemeSwitcher from '../MainHeader/ThemeSwitcher';
import styles from './ConfigTool.css';

export function ConfigToolLinks() {
  return [{ rel: 'stylesheet', href: styles }]
}


function ConfigTool({ downloadImage, deleteCanvas, shareLink }) {
  const isMobile = useMatchMedia('(min-width: 320px) and (max-width: 767px)');
  const [hide, togglehide] = useState(true);
  console.log(isMobile);

  function showAdditionTools(e) {
    togglehide(!hide);
  }

  return (
    <div className="configTool">


      <div className={`wrapper ${hide ? 'hide-tools' : ''}`} >
        <div className='icon' onClick={deleteCanvas}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </div>
        <div className='icon' onClick={downloadImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <div className='icon' onClick={shareLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
        </div>
        <div className='icon'>
          <Collaborators />
        </div>
        <div>
          <ThemeSwitcher />
        </div>


      </div>
      <div className='mobile-icon' onClick={showAdditionTools}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </div>
  )
}

export default React.memo(ConfigTool);