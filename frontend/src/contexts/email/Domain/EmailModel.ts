export interface Email {
    email: string;
}

export const createEmail = (email: string): Email => ({
    email,
});
