import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as S from "./nav-menu.styles.js";

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
            <S.MenuLink>
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink>
              <S.MenuLink to="/my-playlist">Мой плейлист</S.MenuLink>
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/signout">Выйти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  );
}

export { NavMenu };

export default NavMenu;
