import React from 'react';


function SelectTool({ selectedTool, updateTool }) {
  return (
    <div className="selectTool">
      <span className={`tool-icon ${selectedTool === 'select' ? 'selected' : ''}`} id="select" onClick={updateTool}>

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentcolor" fillRule="evenodd" clipRule="evenodd"
            d="M11.9476 0.228823C12.2527 -0.0762743 12.7473 -0.0762743 13.0524 0.228823L16.1774 3.35382C16.4825 3.65892 16.4825 4.15358 16.1774 4.45868C15.8723 4.76377 15.3777 4.76377 15.0726 4.45868L13.2812 2.66735V8.59375C13.2812 9.02522 12.9315 9.375 12.5 9.375C12.0685 9.375 11.7188 9.02522 11.7188 8.59375V2.66735L9.92743 4.45868C9.62233 4.76377 9.12767 4.76377 8.82257 4.45868C8.51748 4.15358 8.51748 3.65892 8.82257 3.35382L11.9476 0.228823ZM12.5 15.625C12.9315 15.625 13.2812 15.9748 13.2812 16.4062V22.3326L15.0726 20.5413C15.3777 20.2362 15.8723 20.2362 16.1774 20.5413C16.4825 20.8464 16.4825 21.3411 16.1774 21.6462L13.0524 24.7712C12.7473 25.0763 12.2527 25.0763 11.9476 24.7712L8.82257 21.6462C8.51748 21.3411 8.51748 20.8464 8.82257 20.5413C9.12767 20.2362 9.62233 20.2362 9.92743 20.5413L11.7187 22.3326V16.4062C11.7187 15.9748 12.0685 15.625 12.5 15.625Z"
          />
          <path fill="currentcolor" fillRule="evenodd" clipRule="evenodd"
            d="M0.228823 13.0524C-0.0762743 12.7473 -0.0762743 12.2527 0.228823 11.9476L3.35382 8.82257C3.65892 8.51748 4.15358 8.51748 4.45868 8.82257C4.76377 9.12767 4.76377 9.62233 4.45868 9.92743L2.66735 11.7188L8.59375 11.7188C9.02522 11.7188 9.375 12.0685 9.375 12.5C9.375 12.9315 9.02522 13.2813 8.59375 13.2813L2.66735 13.2812L4.45868 15.0726C4.76377 15.3777 4.76377 15.8723 4.45868 16.1774C4.15358 16.4825 3.65892 16.4825 3.35382 16.1774L0.228823 13.0524ZM15.625 12.5C15.625 12.0685 15.9748 11.7188 16.4062 11.7188H22.3326L20.5413 9.92743C20.2362 9.62233 20.2362 9.12767 20.5413 8.82257C20.8464 8.51748 21.3411 8.51748 21.6462 8.82257L24.7712 11.9476C25.0763 12.2527 25.0763 12.7473 24.7712 13.0524L21.6462 16.1774C21.3411 16.4825 20.8464 16.4825 20.5413 16.1774C20.2362 15.8723 20.2362 15.3777 20.5413 15.0726L22.3326 13.2813H16.4062C15.9748 13.2813 15.625 12.9315 15.625 12.5Z"
          />
        </svg>

      </span>
      <span className={`tool-icon ${selectedTool === 'rect' ? 'selected' : ''}`} id="rect" onClick={updateTool}>

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentcolor"
            d="M21.875 1.5625C22.7379 1.5625 23.4375 2.26206 23.4375 3.125V21.875C23.4375 22.7379 22.7379 23.4375 21.875 23.4375H3.125C2.26206 23.4375 1.5625 22.7379 1.5625 21.875V3.125C1.5625 2.26206 2.26206 1.5625 3.125 1.5625H21.875ZM3.125 0C1.39911 0 0 1.39911 0 3.125V21.875C0 23.6009 1.39911 25 3.125 25H21.875C23.6009 25 25 23.6009 25 21.875V3.125C25 1.39911 23.6009 0 21.875 0H3.125Z"
          />
        </svg>

      </span>
      <span className={`tool-icon ${selectedTool === 'circle' ? 'selected' : ''}`} id="circle" onClick={updateTool}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentcolor"
            d="M12.5 23.4375C6.45939 23.4375 1.5625 18.5406 1.5625 12.5C1.5625 6.45939 6.45939 1.5625 12.5 1.5625C18.5406 1.5625 23.4375 6.45939 23.4375 12.5C23.4375 18.5406 18.5406 23.4375 12.5 23.4375ZM12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
          />
        </svg>

      </span>
      <span className={`tool-icon ${selectedTool === 'arrow' ? 'selected' : ''}`} id="arrow" onClick={updateTool}>

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentcolor" fillRule="evenodd" clipRule="evenodd"
            d="M1.5625 12.5C1.5625 12.0685 1.91228 11.7187 2.34375 11.7187H20.7701L15.8538 6.80243C15.5487 6.49733 15.5487 6.00267 15.8538 5.69757C16.1589 5.39247 16.6536 5.39247 16.9587 5.69757L23.2087 11.9476C23.5138 12.2527 23.5138 12.7473 23.2087 13.0524L16.9587 19.3024C16.6536 19.6075 16.1589 19.6075 15.8538 19.3024C15.5487 18.9973 15.5487 18.5027 15.8538 18.1976L20.7701 13.2812H2.34375C1.91228 13.2812 1.5625 12.9315 1.5625 12.5Z"
          />
        </svg>

      </span>
      <span className={`tool-icon ${selectedTool === 'line' ? 'selected' : ''}`} id="line" onClick={updateTool}>
        <svg height="25" width="25" viewBox="0 0 25 25">
          <line x1="0" y1="10" x2="25" y2="25" stroke="var(--icon-color)" />
        </svg>
      </span>
      <span className={`tool-icon ${selectedTool === 'diamond' ? 'selected' : ''}`} id="diamond" onClick={updateTool}>

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentcolor"
            d="M10.8603 0.679185C11.7659 -0.226396 13.2341 -0.226394 14.1397 0.679186L24.3208 10.8603C25.2264 11.7659 25.2264 13.2341 24.3208 14.1397L14.1397 24.3208C13.2341 25.2264 11.7659 25.2264 10.8603 24.3208L0.679185 14.1397C-0.226396 13.2341 -0.226394 11.7659 0.679186 10.8603L10.8603 0.679185ZM13.0466 1.77232C12.7447 1.47046 12.2553 1.47046 11.9534 1.77232L1.77232 11.9534C1.47046 12.2553 1.47046 12.7447 1.77232 13.0466L11.9534 23.2277C12.2553 23.5295 12.7447 23.5295 13.0466 23.2277L23.2277 13.0466C23.5295 12.7447 23.5295 12.2553 23.2277 11.9534L13.0466 1.77232Z"
          />
        </svg>

      </span>
      <span className={`tool-icon ${selectedTool === 'chalk' ? 'selected' : ''}`} id="chalk" onClick={updateTool}>

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1287_3498)">
            <path fill="currentcolor"
              d="M18.9788 0.228823C19.2839 -0.0762743 19.7786 -0.0762743 20.0837 0.228823L24.7712 4.91632C25.0763 5.22142 25.0763 5.71608 24.7712 6.02118L9.1462 21.6462C9.07139 21.721 8.98216 21.7798 8.88392 21.8191L1.07142 24.9441C0.781252 25.0602 0.449832 24.9922 0.228846 24.7712C0.0078592 24.5502 -0.0601674 24.2188 0.0559004 23.9286L3.1809 16.1161C3.22019 16.0179 3.27903 15.9286 3.35385 15.8538L18.9788 0.228823ZM17.5111 3.90625L21.0938 7.4889L23.1139 5.46875L19.5313 1.8861L17.5111 3.90625ZM19.9889 8.59375L16.4063 5.0111L6.25002 15.1674V15.625H7.03127C7.46275 15.625 7.81252 15.9748 7.81252 16.4062V17.1875H8.59377C9.02525 17.1875 9.37502 17.5373 9.37502 17.9688V18.75H9.83267L19.9889 8.59375ZM4.73698 16.6804L4.57209 16.8453L2.18366 22.8164L8.15473 20.4279L8.31962 20.263C8.02338 20.152 7.81252 19.8663 7.81252 19.5312V18.75H7.03127C6.5998 18.75 6.25002 18.4002 6.25002 17.9688V17.1875H5.46877C5.13377 17.1875 4.84801 16.9766 4.73698 16.6804Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_1287_3498">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </span>
    </div>
  )
}


export default SelectTool;