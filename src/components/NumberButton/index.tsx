import React, { ReactNode } from 'react';
import { StyledButton } from './styles';

export type NumberButtonProps = {
  isHighlighted?: boolean;
  children?: number;
  onClick?: () => void;
};

const NumberButton: React.FC<NumberButtonProps> = ({ children, ...rest }) => (
  <StyledButton
    role="button"
    name={String(children)}
    aria-label={String(children)}
    tabIndex={0}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default NumberButton;
