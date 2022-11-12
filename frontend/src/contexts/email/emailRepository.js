import { SERVER_URL } from '../../constants';

export const emailRepository = {
    postEmails: async (emails) => {
        const jsonBody = { emails };

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonBody),
        };

        const result = await fetch(SERVER_URL, fetchOptions);

        if (result.status === 200) {
            return { status: result.status };
        }

        const errorResponse = await result.json();

        return { status: result.status, ...errorResponse };
    },
};
