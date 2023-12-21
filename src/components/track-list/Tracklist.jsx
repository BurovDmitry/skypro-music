import Track from "./track/Track.jsx";
import { tracks } from "../Tracksarray.js";
import SearchSelection from "./SearchSelection.jsx";
import * as S from "./Tracklist.styles.js";

function Tracklist({ showSkeleton }) {
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
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default Tracklist;
