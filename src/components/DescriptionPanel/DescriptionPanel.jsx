import React from 'react';
import './descriptionPanel.css'

export function DescriptionPanel() {
      return (
            <div className="description__panel">
                  <p className='description__header'>
                        <span>Description</span>
                        <i className="fa-solid fa-chevron-up"></i>
                  </p>

                  <p className='description__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur eaque provident quasi totam distinctio dignissimos dolorem vero nesciunt praesentium placeat, magnam nostrum voluptatem asperiores id in laboriosam saepe nisi quidem, vel corporis nobis aspernatur iure. Nostrum autem perspiciatis aliquam quidem voluptate repellendus suscipit repudiandae laborum non qui, illum fugit?</p>
            </div>
      );
}

