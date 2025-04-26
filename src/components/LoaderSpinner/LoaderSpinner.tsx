"use client";
import { LoaderCircle } from "lucide-react";
import { SpinnerContainer } from "./LoaderSpinner.styled";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const LoadingSpinner = ({
  size = 24,
  color = "#3b82f6",
  className,
}: LoadingSpinnerProps) => {
  return (
    <SpinnerContainer
      role="status"
      aria-label="Cargando"
      $size={size}
      $color={color}
      className={className}
    >
      <LoaderCircle size={size} />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
