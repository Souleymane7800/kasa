import React, { useState } from 'react';
import './descriptionPanel.css'

export function DescriptionPanel(props) {

      const [ isShow, setIsShow ] = useState(false);

      const showContent = () => {
            setIsShow(!isShow);
      }

      const contentClass = (isShow ? "visible" : "hidden") + " description__content";
      const chevronClass = (isShow ? "fa-chevron-up" : "fa-chevron-down") + " fas";

      return (
            <div className="description__panel">
                  <p className='description__header' onClick={showContent} >
                        <span>{props.title}</span>
                        <i className={chevronClass}></i>
                  </p>
                  <p className={contentClass}>{props.content}</p>
                  {/* 27.09mn */}
            </div>
      );
}

