import { useState } from "react";
import * as S from "./SearchSelection.styles";

function SearchSelection() {
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);
  const [menu3Open, setMenu3Open] = useState(false);

  const handleButtonClick = (menuNumber) => {
    switch (menuNumber) {
      case 1: {
        setMenu1Open(!menu1Open);
        setMenu2Open(false);
        setMenu3Open(false);
        break;
      }
      case 2: {
        setMenu2Open(!menu2Open);
        setMenu1Open(false);
        setMenu3Open(false);
        break;
      }
      case 3: {
        setMenu3Open(!menu3Open);
        setMenu1Open(false);
        setMenu2Open(false);
        break;
      }
      default:
        break;
    }
  };

  const handleMenuClose = () => {
    setMenu1Open(false);
    setMenu2Open(false);
    setMenu3Open(false);
  };

  return (
    <S.CenterblockFilter>
      {(menu1Open || menu2Open || menu3Open) && (
        <S.Overlay onClick={handleMenuClose}></S.Overlay>
      )}
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterItem>
        <S.FilterButton onClick={() => handleButtonClick(1)}>
          исполнителю
        </S.FilterButton>
        {menu1Open && (
          <S.FilterNav>
            <S.FilterNavList>
              <S.FilterNavItems>Nero</S.FilterNavItems>
              <S.FilterNavItems>Dynoro, Outwrk, Mr. Gee</S.FilterNavItems>
              <S.FilterNavItems>Ali Bakgor</S.FilterNavItems>
              <S.FilterNavItems>Стоункат, Psychopath</S.FilterNavItems>
              <S.FilterNavItems>Jade, Will Clarke, AR/C0</S.FilterNavItems>
              <S.FilterNavItems>Blue Foundation, Zeds Dead</S.FilterNavItems>
              <S.FilterNavItems>
                HYBIT, Mr.Black, Offer Nissim, Hi Profile
              </S.FilterNavItems>
              <S.FilterNavItems>mimthaze</S.FilterNavItems>
              <S.FilterNavItems>Calvin Harris, Disciples</S.FilterNavItems>
              <S.FilterNavItems>Soindz Made in Romania</S.FilterNavItems>
            </S.FilterNavList>
          </S.FilterNav>
        )}
      </S.FilterItem>

      <S.FilterItem>
        <S.FilterButton onClick={() => handleButtonClick(2)}>
          году выпуска
        </S.FilterButton>
        {menu2Open && (
          <S.FilterNav>
            <S.FilterNavList>
              <S.FilterNavItems>1998</S.FilterNavItems>
              <S.FilterNavItems>2000</S.FilterNavItems>
              <S.FilterNavItems>2002</S.FilterNavItems>
              <S.FilterNavItems>2004</S.FilterNavItems>
            </S.FilterNavList>
          </S.FilterNav>
        )}
      </S.FilterItem>
      <S.FilterItem>
        <S.FilterButton onClick={() => handleButtonClick(3)}>
          жанру
        </S.FilterButton>
        {menu3Open && (
          <S.FilterNav>
            <S.FilterNavList>
              <S.FilterNavItems>Рок</S.FilterNavItems>
              <S.FilterNavItems>Хип-Хоп</S.FilterNavItems>
              <S.FilterNavItems>Поп-музыка</S.FilterNavItems>
              <S.FilterNavItems>Техно</S.FilterNavItems>
              <S.FilterNavItems>Инди</S.FilterNavItems>
              <S.FilterNavItems>Метал</S.FilterNavItems>
              <S.FilterNavItems>Калссика</S.FilterNavItems>
            </S.FilterNavList>
          </S.FilterNav>
        )}
      </S.FilterItem>
    </S.CenterblockFilter>
  );
}

export default SearchSelection;
