import { IServerResponse } from '../Infrastructure/FetchEmailRepository';
import { Email } from './EmailModel';

export interface EmailRepository {
    postEmails: (emails: Email[]) => Promise<IServerResponse>;
}
