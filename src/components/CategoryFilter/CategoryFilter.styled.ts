import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme?.colors?.muted};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `${theme?.colors?.mutedForeground}30`};
    border-radius: 4px;
  }
`;

export const CategoryButton = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: ${({ theme }) => theme?.fontSizes?.sm};
  font-weight: ${({ theme }) => theme?.fontWeights?.medium};
  white-space: nowrap;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  ${({ theme, $isActive }) =>
    $isActive
      ? `
      background-color: ${theme?.colors?.primary};
      color: white;
    `
      : `
      background-color: ${theme?.colors?.secondary};
      color: ${theme?.colors?.foreground};
      
      &:hover {
        background-color: ${theme?.colors?.accent};
      }
    `}
`;
