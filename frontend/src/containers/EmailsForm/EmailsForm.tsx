import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Banner } from '../../components/Banner';
import { Button } from '../../components/Button';
import { FileInputArea } from '../../components/FileInputArea';
import { SelectedFilesHolder } from '../../components/SelectedFilesHolder';
import { Spinner } from '../../components/Spinner';
import { postEmails } from '../../contexts/email/Entrypoint';
import { IServerResponse } from '../../contexts/email/Infrastructure/FetchEmailRepository';
import { fileAtom } from '../../contexts/file/fileAtom';
import { fileRepository } from '../../contexts/file/fileRepository';
import './EmailsForm.css';

export const EmailsForm = (): JSX.Element => {
    const files = useRecoilValue(fileAtom);
    const [sending, setSending] = useState<boolean>(false);
    const [serverResponse, setServerResponse] = useState<IServerResponse | undefined>(undefined);

    const onSendEmailsClick = async () => {
        setSending(true);

        try {
            const emails = await fileRepository.extractEmails(files);
            const result = await postEmails(emails);
            setServerResponse(result);
        } catch (e) {
            const unexpectedError: IServerResponse = { status: 500, emails: [] };
            setServerResponse(unexpectedError);
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            {sending && <Spinner/>}

            <div className="emails-form">
                <FileInputArea/>

                <SelectedFilesHolder/>

                <Button
                    copy={'Send emails'}
                    onClick={onSendEmailsClick}
                    disabled={sending || files.length === 0}
                />

                {!!serverResponse && <Banner serverResponse={serverResponse}/>}
            </div>
        </>
    );
};
