import React, { useRef } from 'react';
import './FileInputArea.css';

export const FileInputArea = ({ setFiles }) => {
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = useRef(null);

    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFiles(Array.from(e.dataTransfer.files));
        }
    };

    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setFiles(Array.from(e.target.files));
        }
    };

    return (
        <div className='fia-container' onDragEnter={handleDrag}>
            <input
                ref={inputRef}
                type='file'
                id='fia-input'
                accept='.txt'
                multiple
                onChange={handleChange}
            />
            <label htmlFor='fia-input' className={`fia-label ${dragActive ? 'drag-active' : ''}`}>
                Drag and drop your files here or click anywhere inside
            </label>
            {dragActive && (
                <div
                    className='fia-drag'
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                />
            )}
        </div>
    );
};
