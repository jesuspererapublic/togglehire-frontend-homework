import { ButtonContainer, Button as StyledButton } from './Button.styles';

interface ButtonProps {
    copy: string;
    disabled: boolean;
    onClick: () => void;
    small?: boolean;
}

export const Button = ({ copy, onClick, disabled, small }: ButtonProps): JSX.Element => {
    return (
        <ButtonContainer>
            <StyledButton onClick={onClick} disabled={disabled} small={small}>
                {copy}
            </StyledButton>
        </ButtonContainer>
    );
};
