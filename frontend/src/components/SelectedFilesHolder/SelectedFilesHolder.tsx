import { useEffect, useState } from 'react';
import './SelectedFilesHolder.css';
import { useRecoilValue } from 'recoil';
import { fileAtom } from '../../contexts/file/fileAtom';
import { fileRepository } from '../../contexts/file/fileRepository';

export const SelectedFilesHolder = (): JSX.Element | null => {
    const files = useRecoilValue(fileAtom);
    const extractFileNames = (files: File[]) => files.map((file) => file.name);
    const [extraFileInfo, setExtraFileInfo] = useState<number[]>([]);

    useEffect(() => {
        const getFileInfo = async () => {
            const result = await fileRepository.extractInfo(files);
            setExtraFileInfo(result);
        };

        void getFileInfo();
    }, [files]);

    // Early return when no files are selected
    if (files.length === 0) {
        return null;
    }

    return (
        <div className="sfh-container">
            <ul className="sfh-ul">
                {extractFileNames(files).map((fileName, i) => (
                    <li className="sfh-li" key={`${i}${fileName}`}>
                        {fileName} - {`(${extraFileInfo[i]} valid emails)`}
                    </li>
                ))}
            </ul>
        </div>
    );
};
