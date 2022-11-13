import './Spinner.css';

export const Spinner = (): JSX.Element => {
    return (
        <div className='spinner-container'>
            <div className='spinner'>
                <div></div>
                <div></div>
            </div>
            <div className='spinner-background'></div>
        </div>
    );
};
