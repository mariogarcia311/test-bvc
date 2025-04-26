import styled, { css } from "styled-components";
import { ButtonSize, ButtonVariant } from "./Button.type";

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme?.radii?.md};
  font-weight: ${({ theme }) => theme?.fontWeights?.medium};
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variant styles */
  ${({ theme, $variant }) => {
    switch ($variant) {
      case "default":
        return css`
          background-color: ${theme?.colors?.primary};
          color: white;
          border: 1px solid ${theme?.colors?.primary};

          &:hover:not(:disabled) {
            background-color: ${theme?.colors?.primaryDark};
            border-color: ${theme?.colors?.primaryDark};
          }

          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      case "outline":
        return css`
          background-color: transparent;
          color: ${theme?.colors?.foreground};
          border: 1px solid ${theme?.colors?.border};

          &:hover:not(:disabled) {
            background-color: ${theme?.colors?.accent};
            border-color: ${theme?.colors?.border};
          }

          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      case "secondary":
        return css`
          background-color: ${theme?.colors?.secondary};
          color: ${theme?.colors?.foreground};
          border: 1px solid ${theme?.colors?.secondary};

          &:hover:not(:disabled) {
            background-color: ${theme?.colors?.accent};
          }

          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      case "ghost":
        return css`
          background-color: transparent;
          color: ${theme?.colors?.foreground};
          border: 1px solid transparent;

          &:hover:not(:disabled) {
            background-color: ${theme?.colors?.accent};
          }

          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      case "link":
        return css`
          background-color: transparent;
          color: ${theme?.colors?.primary};
          border: none;
          text-decoration: underline;
          padding: 0;

          &:hover:not(:disabled) {
            color: ${theme?.colors?.primaryDark};
          }
        `;
      case "destructive":
        return css`
          background-color: ${theme?.colors?.destructive};
          color: white;
          border: 1px solid ${theme?.colors?.destructive};

          &:hover:not(:disabled) {
            background-color: ${theme?.colors?.destructive}dd;
          }

          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      default:
        return "";
    }
  }}

  /* Size styles */
  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.875rem;
          gap: 0.25rem;
        `;
      case "default":
        return css`
          height: 2.5rem;
          padding: 0 1rem;
          font-size: 0.875rem;
          gap: 0.5rem;
        `;
      case "lg":
        return css`
          height: 3rem;
          padding: 0 1.5rem;
          font-size: 1rem;
          gap: 0.5rem;
        `;
      case "icon":
        return css`
          height: 2.5rem;
          width: 2.5rem;
          padding: 0;
          font-size: 0.875rem;
        `;
      default:
        return "";
    }
  }}
`;
