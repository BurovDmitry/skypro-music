import { useState } from "react";
import "./SearchSelection.css";

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
    // Закрываем все меню при клике вне кнопок
    setMenu1Open(false);
    setMenu2Open(false);
    setMenu3Open(false);
  };

  return (
    <div className="centerblock__filter filter">
      {(menu1Open || menu2Open || menu3Open) && (
        <div onClick={handleMenuClose} className="overlay"></div>
      )}
      <div className="filter__title">Искать по:</div>
      <div className="filter__item">
        <div
          className="filter__button button-author _btn-text"
          onClick={() => handleButtonClick(1)}
        >
          исполнителю
        </div>
        {menu1Open && (
          <div className="filter__nav ">
            <ul className="filter__nav-list">
              <li className="filter__nav-items">Nero</li>
              <li className="filter__nav-items">Dynoro, Outwrk, Mr. Gee</li>
              <li className="filter__nav-items">Ali Bakgor</li>
              <li className="filter__nav-items">Стоункат, Psychopath</li>
              <li className="filter__nav-items">Jade, Will Clarke, AR/C0</li>
              <li className="filter__nav-items">Blue Foundation, Zeds Dead</li>
              <li className="filter__nav-items">
                HYBIT, Mr.Black, Offer Nissim, Hi Profile
              </li>
              <li className="filter__nav-items">mimthaze</li>
              <li className="filter__nav-items">Calvin Harris, Disciples</li>
              <li className="filter__nav-items">Soindz Made in Romania</li>
            </ul>
          </div>
        )}
      </div>

      <div className="filter__item">
        <div
          className="filter__button button-year _btn-text"
          onClick={() => handleButtonClick(2)}
        >
          году выпуска
        </div>
        {menu2Open && (
          <div className={`filter__nav`}>
            <ul className="filter__nav-list">
              <li className="filter__nav-items">1998</li>
              <li className="filter__nav-items">2000</li>
              <li className="filter__nav-items">2002</li>
              <li className="filter__nav-items">2004</li>
            </ul>
          </div>
        )}
      </div>
      <div className="filter__item">
        <div
          className="filter__button button-genre _btn-text"
          onClick={() => handleButtonClick(3)}
        >
          жанру
        </div>
        {menu3Open && (
          <div className={`filter__nav`}>
            <ul className="filter__nav-list">
              <li className="filter__nav-items">Рок</li>
              <li className="filter__nav-items">Хип-Хоп</li>
              <li className="filter__nav-items">Поп-музыка</li>
              <li className="filter__nav-items">Техно</li>
              <li className="filter__nav-items">Инди</li>
              <li className="filter__nav-items">Метал</li>
              <li className="filter__nav-items">Калссика</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchSelection;

// return (
//   <div>
//     <button onClick={() => handleButtonClick(1)}>Кнопка 1</button>
//     {menu1Open && <div>Контекстное меню для кнопки 1</div>}

//     <button onClick={() => handleButtonClick(2)}>Кнопка 2</button>
//     {menu2Open && <div>Контекстное меню для кнопки 2</div>}

//     <button onClick={() => handleButtonClick(3)}>Кнопка 3</button>
//     {menu3Open && <div>Контекстное меню для кнопки 3</div>}

//     {/* Закрываем все меню при клике вне кнопок */}
//     {menu1Open || menu2Open || menu3Open && (
//       <div onClick={handleMenuClose} className="overlay">
//         {/* Подложка для закрытия меню при клике вне них */}
//       </div>
//     )}
//   </div>
// );
