import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 10;
`;

export const HeaderContent = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Logo = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.div`
  width: 4rem;
  height: 2rem;
  border-radius: ${(props) => props.theme.radii.lg};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primaryLight} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) =>
    props.$active
      ? props.theme.colors.primary
      : props.theme.colors.mutedForeground};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const MobileMenu = styled.div`
  display: block;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.foreground};

  @media (min-width: 768px) {
    display: none;
  }
`;
