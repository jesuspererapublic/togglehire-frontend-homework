import { EMAIL_REGEXP } from '../../constants';

const getFileContent = (file: File): Promise<string[]> =>
    new Promise<string[]>((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve((fr?.result as string || '' ).split('\n'));
        fr.onerror = reject;
        fr.readAsText(file);
    });

const getFilesContent = (files: File[]) => Promise.all(files.map(getFileContent));

const validateEmails = (emails: string[]) => {
    const validEmails = emails
        .filter((email) => email.length > 0)
        .filter((email) => EMAIL_REGEXP.test(email));

    return [...new Set(validEmails)];
};

export const fileRepository = {
    extractEmails: async (files: File[]) => {
        // Read the contents of the files
        const filesContent = await getFilesContent(files);

        const emails = filesContent.flat();

        return validateEmails(emails);
    },
    extractInfo: async (files: File[]) => {
        const filesContent = await getFilesContent(files);

        return filesContent.map((fileContent) => {
            const validEmails = validateEmails(fileContent);

            return validEmails.length;
        });
    },
};
