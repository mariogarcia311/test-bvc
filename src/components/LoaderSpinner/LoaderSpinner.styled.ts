import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div<{ $size: number; $color: string }>`
  display: inline-block;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  color: ${(props) => props.$color};
  animation: ${spin} 1s linear infinite;
`;
