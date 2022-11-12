import { EMAIL_REGEXP } from '../../constants';

const getFileContent = (file) =>
    new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result.split('\n'));
        fr.onerror = reject;
        fr.readAsText(file);
    });

const getFilesContent = (files) => Promise.all(files.map(getFileContent));

const validateEmails = (emails) => {
    const validEmails = emails
        .filter((email) => email.length > 0)
        .filter((email) => EMAIL_REGEXP.test(email));

    return [...new Set(validEmails)];
};

export const fileRepository = {
    extractEmails: async (files) => {
        // Read the contents of the files
        const filesContent = await getFilesContent(files);

        const emails = filesContent.flat();

        return validateEmails(emails);
    },
    extractInfo: async (files) => {
        const filesContent = await getFilesContent(files);

        return filesContent.map((fileContent) => {
            const validEmails = validateEmails(fileContent);

            return validEmails.length;
        });
    },
};
