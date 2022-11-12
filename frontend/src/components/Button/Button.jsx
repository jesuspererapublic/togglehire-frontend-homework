import React from 'react';
import './Button.css';

export const Button = ({ copy, onClick, disabled, extraClasses }) => {
    return (
        <div className='button-container'>
            <button className={`button ${extraClasses}`} onClick={onClick} disabled={disabled}>
                {copy}
            </button>
        </div>
    );
};
