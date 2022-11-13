import {
    createPostEmailsCommand,
    handlePostEmailsCommand,
} from '../Application/PostEmailsCommand';
import { createEmail } from '../Domain/EmailModel';
import { fetchEmailRepository } from '../Infrastructure/FetchEmailRepository';

export const postEmails = (emails: string[]) => {
    const emailModels = emails.map(createEmail);
    const command = createPostEmailsCommand(emailModels);
    return handlePostEmailsCommand(command)(fetchEmailRepository);
};
