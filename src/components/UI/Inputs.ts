import styled, { css } from 'styled-components';
import { BoxSizing, BoxSpacing } from './types/types';
import { spacing } from './mixin';

interface CommonInputProps extends BoxSizing, BoxSpacing {
  $warning?: boolean;
}

const CommonInput = styled.input<CommonInputProps>`
  background-color: transparent !important;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.third};
  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $height }) => ($height ? $height : '28px')};
  box-sizing: border-box;
  font-family: 'Pretendard';

  ${spacing}

  ${({ $minWidth }) =>
    $minWidth &&
    css`
      min-width: ${$minWidth};
    `}
  
    ${({ $minHeight }) =>
    $minHeight &&
    css`
      min-height: ${$minHeight};
    `}

  ${({ $warning }) =>
    $warning &&
    css`
      outline-color: ${(props) => props.theme.colors.warning} !important;
      border-color: ${(props) => props.theme.colors.warning} !important;
    `}

  &:focus {
    outline-color: ${(props) => props.theme.colors.brandSecondary};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:autofill,
  &:autofill:hover,
  &:autofill:focus,
  &:autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export { CommonInput };
