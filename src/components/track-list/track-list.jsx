import Track from "./track/track.jsx";
import SearchSelection from "./search-selection.jsx";
import * as S from "./track-list.styles.js";
import { getTracks } from "../../api.js";
import { useEffect, useState } from "react";

function Tracklist({ handleShowSkeleton, showSkeleton, handleStartTrack }) {
  const [tracks, setTracks] = useState([{}, {}, {}]);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    handleShowSkeleton(true);
    getTracks()
      .then((tracks) => {
        setTracks(tracks);
        handleShowSkeleton(false);
      })
      .catch((error) => {
        setErrorMessage("Не удалось загрузить плейлист, попробуйте позже");
        console.error("Ошибка при загрузке треков:", error);
      });
  }, []);

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <SearchSelection />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.TitleCol className="playlist-title__col col01">Трек</S.TitleCol>
          <S.TitleCol className="playlist-title__col col02">
            ИСПОЛНИТЕЛЬ
          </S.TitleCol>
          <S.TitleCol className="playlist-title__col col03">АЛЬБОМ</S.TitleCol>
          <S.TitleCol className="playlist-title__col col04">
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.TitleCol>
        </S.ContentTitle>
        <S.ContentPlaylist>
          <div>
            {errorMessage
              ? errorMessage
              : tracks.map((track, index) => (
                  <Track
                    showSkeleton={showSkeleton}
                    key={index}
                    track={track}
                    handleStartTrack={handleStartTrack}
                  />
                ))}
          </div>
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default Tracklist;
