"use client";

import { useState } from "react";
import {
  ActionContainer,
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoIcon,
  MenuButton,
  MobileMenu,
  MobileNav,
  Nav,
  NavLink,
} from "./Header.styled";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/" className="flex items-center gap-2">
          <Logo>
            <LogoIcon>FMG</LogoIcon>
            FinTech MG
          </Logo>
        </Link>

        <Nav>
          <NavLink href="/" $active>
            Inicio
          </NavLink>
          <NavLink href="/">Productos</NavLink>
          <NavLink href="/">Nosotros</NavLink>
          <NavLink href="/">Contacto</NavLink>
        </Nav>

        <ActionContainer>
          {/* <ModeToggle /> */}
          <Button className="hidden md:flex" aria-label="Iniciar sesión">
            Iniciar sesión
          </Button>
          <MenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </MenuButton>
        </ActionContainer>
      </HeaderContent>

      {isMenuOpen && (
        <MobileMenu>
          <MobileNav>
            <NavLink href="/" $active onClick={() => setIsMenuOpen(false)}>
              Inicio
            </NavLink>
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Productos
            </NavLink>
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </NavLink>
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </NavLink>
            <Button
              aria-label="Iniciar sesión"
              className="w-full mt-2"
              fullWidth
            >
              Iniciar sesión
            </Button>
          </MobileNav>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
