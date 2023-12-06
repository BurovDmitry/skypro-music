import './Sidebar.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Sidebar(showSkeleton) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="/">

              {showSkeleton ? (
                  <Skeleton width="250px" height="150px" baseColor="#202020" />
                ) : (
                  <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              ></img>
                )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="/">
              {showSkeleton ? (
                  <Skeleton width="250px" height="150px" baseColor="#202020" />
                ) : (
                  <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              ></img>
                )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="/">
              {showSkeleton ? (
                  <Skeleton width="250px" height="150px" baseColor="#202020" />
                ) : (
                  <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              ></img>
                )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

