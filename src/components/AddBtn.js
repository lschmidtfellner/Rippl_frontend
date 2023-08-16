import React from 'react';

function AddBtn({ onClick }) {
  return (
    <button className='add-btn' onClick={onClick} aria-label="Custom Button">
      <svg 
        id="Layer_2" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 31.17 31.17"
      >
        <defs>
          <style>
            {
              `.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:2px;}`
            }
          </style>
        </defs>
        <g id="Layer_1-2">
          <circle className="cls-1" cx="15.59" cy="15.59" r="14.59" />
          <line className="cls-1" x1="15.59" y1="6.19" x2="15.59" y2="24.98" />
          <line className="cls-1" x1="24.98" y1="15.59" x2="6.19" y2="15.59" />
        </g>
      </svg>
    </button>
  );
}

export default AddBtn;
