import React, { useState } from 'react';
import './collapse.css'

export function Collapse(props) {

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
                  {isShow && <p className={contentClass}>{props.content}</p>}
            </div>
      );
}

