import "./Track.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              <span className="track__title-span">
                {props.showSkeleton ? (
                  <Skeleton width="150px" height="20px" baseColor="#202020" />
                ) : (
                  props.trackName
                )}
              </span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.showSkeleton ? (
                  <Skeleton width="150px" height="20px" baseColor="#202020" />
                ) : (
                  props.groupName
                )}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.showSkeleton ? (
                  <Skeleton width="150px" height="20px" baseColor="#202020" />
                ) : (
                  props.groupName
                )}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">
          {props.showSkeleton ? (
                  "00:00"
                ) : (
                  props.duration
                )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Track;
