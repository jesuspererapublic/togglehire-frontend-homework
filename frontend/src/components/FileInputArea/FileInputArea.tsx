import { ChangeEventHandler, DragEventHandler, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { fileAtom } from '../../contexts/file/fileAtom';
import './FileInputArea.css';

export const FileInputArea = (): JSX.Element => {
    const setFiles = useSetRecoilState(fileAtom);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleDrag: DragEventHandler<HTMLDivElement> = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop: DragEventHandler<HTMLDivElement> = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFiles(Array.from(e.dataTransfer.files));
        }
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setFiles(Array.from(e.target.files));
        }
    };

    return (
        <div className="fia-container" onDragEnter={handleDrag}>
            <input
                ref={inputRef}
                type="file"
                id="fia-input"
                accept=".txt"
                multiple
                onChange={handleChange}
            />
            <label htmlFor="fia-input" className={`fia-label ${dragActive ? 'drag-active' : ''}`}>
                Drag and drop your files here or click anywhere inside
            </label>
            {dragActive && (
                <div
                    className="fia-drag"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                />
            )}
        </div>
    );
};
