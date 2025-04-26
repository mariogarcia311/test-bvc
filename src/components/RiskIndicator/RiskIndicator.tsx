"use client";

import {
  RiskBar,
  RiskContainer,
  RiskLabel,
  RiskLevel,
} from "./RiskIndicator.styled";

interface RiskIndicatorProps {
  level: number;
  showLabel?: boolean;
}

const RiskIndicator = ({ level, showLabel = false }: RiskIndicatorProps) => {
  const getRiskLabel = (level: number): string => {
    if (level <= 2) return "Bajo";
    if (level <= 3) return "Medio";
    return "Alto";
  };

  return (
    <RiskContainer>
      <RiskBar>
        <RiskLevel $level={level} />
      </RiskBar>
      {showLabel && <RiskLabel>{getRiskLabel(level)}</RiskLabel>}
    </RiskContainer>
  );
};

export default RiskIndicator;
