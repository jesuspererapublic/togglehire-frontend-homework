import { SERVER_URL } from '../../../constants';
import { EmailRepository } from '../Domain/EmailRepository';

export interface IServerResponse {
    status: number;
    emails: string[];
}

export const fetchEmailRepository: EmailRepository = {
    postEmails: async (emails) => {
        const jsonBody = { emails: emails.map(email => email.email) };

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonBody),
        };

        const result = await fetch(SERVER_URL, fetchOptions);

        if (result.status === 200) {
            return { status: result.status, emails: [] };
        }

        const errorResponse = await result.json();

        return { status: result.status, ...errorResponse };
    }

}
