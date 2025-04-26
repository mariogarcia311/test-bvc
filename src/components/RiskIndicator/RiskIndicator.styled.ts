import styled from "styled-components";

export const RiskContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RiskBar = styled.div`
  display: flex;
  height: 0.5rem;
  width: 5rem;
  background-color: ${({ theme }) => theme?.colors?.muted};
  border-radius: 9999px;
  overflow: hidden;
`;

export const RiskLevel = styled.div<{ $level: number }>`
  height: 100%;
  width: ${({ $level }) => `${$level * 20}%`};
  background-color: ${({ theme, $level }) => {
    if ($level <= 2) return theme?.riskColors?.low;
    if ($level <= 3) return theme?.riskColors?.medium;
    return theme?.riskColors?.high;
  }};
`;

export const RiskLabel = styled.span`
  font-size: ${({ theme }) => theme?.fontSizes?.sm};
  font-weight: ${({ theme }) => theme?.fontWeights?.medium};
`;
