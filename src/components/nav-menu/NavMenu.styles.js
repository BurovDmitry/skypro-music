import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";


export const MainNav = styled.nav`
  background-color: #181818;
  padding: 20px 0 20px 36px;
`;

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;

export const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 26px;
`;

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

