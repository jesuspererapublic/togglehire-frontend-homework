import { IServerResponse } from '../../contexts/email/Infrastructure/FetchEmailRepository';
import { BannerContainer, BannerLI, BannerMessage, BannerUL } from './Banner.styles';

interface BannerProps {
    serverResponse: IServerResponse;
}

export const Banner = ({ serverResponse }: BannerProps): JSX.Element => {
    const okServerResponse = 'Emails sent successfully!';
    const koServerResponse = 'There was an Error: Failed to send emails to some addresses';

    const copy = serverResponse.status === 200 ? okServerResponse : koServerResponse;
    const files = serverResponse.emails || [];

    return (
        <BannerContainer ok={serverResponse.status === 200}>
            <BannerMessage>{copy}</BannerMessage>
            {files.length > 0 && (
                <BannerUL>
                    {files.map((file, i) => (
                        <BannerLI key={i + file}>
                            {file}
                        </BannerLI>
                    ))}
                </BannerUL>
            )}
        </BannerContainer>
    );
};
