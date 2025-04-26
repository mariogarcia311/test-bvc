import styled from "styled-components";

export const ProductHeader = styled.div<{ $category: string }>`
  background-color: ${({ theme, $category }) => {
    const category = $category as keyof typeof theme.categoryColors;
    return theme?.categoryColors?.[category];
  }};
  padding: 2rem;
  color: white;
  border-radius: ${({ theme }) => theme?.radii?.xl};
  margin-bottom: 2rem;
`;

export const ProductType = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes?.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

export const ProductName = styled.h1`
  font-size: ${({ theme }) => theme?.fontSizes?.["4xl"]};
  font-weight: ${({ theme }) => theme?.fontWeights?.bold};
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme?.fontSizes?.md};
  line-height: 1.5;
  max-width: 42rem;
`;

export const DetailSection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme?.fontSizes?.xl};
  font-weight: ${({ theme }) => theme?.fontWeights?.semibold};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.border};
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const DetailCard = styled.div`
  background-color: ${({ theme }) => theme?.colors?.card};
  border: 1px solid ${({ theme }) => theme?.colors?.border};
  border-radius: ${({ theme }) => theme?.radii?.lg};
  padding: 1.25rem;
`;

export const DetailLabel = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes?.sm};
  color: ${({ theme }) => theme?.colors?.mutedForeground};
  margin-bottom: 0.5rem;
`;

export const DetailValue = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes?.xl};
  font-weight: ${({ theme }) => theme?.fontWeights?.semibold};
`;

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  &::before {
    content: "•";
    color: ${({ theme }) => theme?.colors?.primary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme?.colors?.card};
  border: 1px solid ${({ theme }) => theme?.colors?.border};
  border-radius: ${({ theme }) => theme?.radii?.lg};
  padding: 1.5rem;
  position: sticky;
  top: 6rem;
`;

export const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme?.fontSizes?.lg};
  font-weight: ${({ theme }) => theme?.fontWeights?.semibold};
  margin-bottom: 1rem;
`;

export const ContactText = styled.p`
  font-size: ${({ theme }) => theme?.fontSizes?.sm};
  color: ${({ theme }) => theme?.colors?.mutedForeground};
  margin-bottom: 1.5rem;
`;

export const StyledBadge = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 12px;
`;
