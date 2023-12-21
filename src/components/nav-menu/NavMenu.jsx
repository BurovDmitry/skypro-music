import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as S from "./NavMenu.styles.js";

function NavMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo"></S.LogoImage>
      </S.NavLogo>
      <S.SFontAwesomeIcon icon={faBars} onClick={() => setOpen(!isOpen)} />
      <S.NavMenu>
        <S.MenuList isOpen={isOpen}>
          <S.MenuItem>
            <S.MenuLink href="/">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="/">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="../signin.html">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  );
}

export default NavMenu;
