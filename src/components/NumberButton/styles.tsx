import styled from 'styled-components';
import { NumberButtonProps } from '.';

export const StyledButton = styled.button<
  Pick<NumberButtonProps, 'isHighlighted'>
>`
  font-size: 25px;
  border-width: 3px;
  border-style: ${({ isHighlighted }) => (isHighlighted ? 'dashed' : 'solid')};
  border-color: ${({ isHighlighted }) => (isHighlighted ? 'tomato' : '#ccc')};
  background: ${({ isHighlighted }) => (isHighlighted ? '#fcf2f2' : '#fafafa')};
  cursor: pointer;
  border-radius: 5px;
  height: 50px;
  outline: none;

  &:focus,
  &:active {
    border-color: #444;
  }
`;
