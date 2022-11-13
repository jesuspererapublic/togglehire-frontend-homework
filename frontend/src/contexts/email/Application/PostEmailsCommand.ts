import { Email } from '../Domain/EmailModel';
import { EmailRepository } from '../Domain/EmailRepository';

export interface PostEmailsCommand {
    emails: Email[];
}

export const createPostEmailsCommand = (emails: Email[]): PostEmailsCommand => ({
    emails,
});

export const handlePostEmailsCommand = (command: PostEmailsCommand) => (repository: EmailRepository) =>
    repository.postEmails(command.emails);
