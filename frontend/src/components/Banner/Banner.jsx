import React from 'react';
import './Banner.css';

export const Banner = ({ serverResponse }) => {
    const okServerResponse = 'Emails sent successfully!';
    const koServerResponse = 'There was an Error: Failed to send emails to some addresses';

    const copy = serverResponse.status === 200 ? okServerResponse : koServerResponse;
    const files = serverResponse.emails || [];

    return (
        <div
            className={`banner-container ${
                serverResponse.status === 200 ? 'banner-ok' : 'banner-ko'
            }`}
        >
            <span className='banner-message'>{copy}</span>
            {files.length > 0 && (
                <ul className='banner-ul'>
                    {files.map((file, i) => (
                        <li className='banner-li' key={i + file}>
                            {file}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
