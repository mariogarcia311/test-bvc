import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme?.colors?.card};
  border-radius: ${({ theme }) => theme?.radii?.lg};
  border: 1px solid ${({ theme }) => theme?.colors?.border};
  overflow: hidden;
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme?.shadows?.lg};
  }
`;

export const CardHeader = styled.div<{ $category: string }>`
  background-color: ${({ theme, $category }) => {
    const category = $category as keyof typeof theme.categoryColors;
    return theme?.categoryColors?.[category];
  }};
  padding: 1.5rem;
  color: white;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const ProductType = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes?.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme?.fontSizes?.xl};
  font-weight: ${({ theme }) => theme?.fontWeights?.semibold};
  line-height: 1.2;
`;

export const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme?.colors?.border};

  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }
`;

export const DetailLabel = styled.span`
  font-size: ${({ theme }) => theme?.fontSizes?.sm};
  color: ${({ theme }) => theme?.colors?.mutedForeground};
`;

export const DetailValue = styled.span`
  font-weight: ${({ theme }) => theme?.fontWeights?.medium};
`;
