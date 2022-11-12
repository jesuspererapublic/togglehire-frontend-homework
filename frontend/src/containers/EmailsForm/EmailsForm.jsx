import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { FileInputArea } from '../../components/FileInputArea';
import { Spinner } from '../../components/Spinner';
import { SelectedFilesHolder } from '../../components/SelectedFilesHolder';
import { fileRepository } from '../../contexts/file/fileRepository';
import { emailRepository } from '../../contexts/email/emailRepository';
import { Banner } from '../../components/Banner';
import './EmailsForm.css';

export const EmailsForm = () => {
    const [files, setFiles] = useState([]);
    const [sending, setSending] = useState(false);
    const [serverResponse, setServerResponse] = useState(undefined);

    const onSendEmailsClick = async () => {
        setSending(true);

        try {
            const emails = await fileRepository.extractEmails(files);
            const result = await emailRepository.postEmails(emails);
            setServerResponse(result);
        } catch (e) {
            const unexpectedError = { status: 500 };
            setServerResponse(unexpectedError);
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            {sending && <Spinner />}

            <div className='emails-form'>
                <FileInputArea setFiles={setFiles} />

                <SelectedFilesHolder files={files} />

                <Button
                    copy={'Send emails'}
                    onClick={onSendEmailsClick}
                    disabled={sending || files.length === 0}
                />

                {!!serverResponse && <Banner serverResponse={serverResponse}></Banner>}
            </div>
        </>
    );
};
