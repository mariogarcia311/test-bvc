"use client";

import { forwardRef } from "react";
import { ButtonProps } from "./Button.type";
import { StyledButton } from "./Button.styled";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "default",
      className = "",
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        className={className}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
