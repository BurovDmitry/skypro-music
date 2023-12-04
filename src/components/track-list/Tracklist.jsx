import "./Tracklist.css";
import Track from "./track/Track.jsx";
import { tracks } from "../Tracksarray.js";
import SearchSelection from "./SearchSelection.jsx";

function Tracklist({ showSkeleton }) {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div>
        <SearchSelection />
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <div>
            {tracks.map((track, index) => (
              <Track
                showSkeleton={showSkeleton}
                key={index}
                trackName={track.trackName}
                groupName={track.groupName}
                albumName={track.albumName}
                duration={track.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracklist;
