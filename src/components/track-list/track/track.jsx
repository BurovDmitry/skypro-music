import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./track.styles";

function Track({ showSkeleton, track, handleStartTrack }) {
  const startTrack = () => {
    handleStartTrack(track);
  };

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText onClick={() => startTrack()}>
            <S.TrackTitleLink href="http://">
              <S.TrackTitleSpan>
                {showSkeleton ? (
                  <Skeleton width="150px" height="20px" baseColor="#202020" />
                ) : (
                  track?.name
                )}
              </S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">
            {showSkeleton ? (
              <Skeleton width="150px" height="20px" baseColor="#202020" />
            ) : (
              track?.author
            )}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
            {showSkeleton ? (
              <Skeleton width="150px" height="20px" baseColor="#202020" />
            ) : (
              track?.album
            )}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {showSkeleton
              ? "00:00"
              : `${Math.floor(track?.duration_in_seconds / 60)}:` +
                `0${track?.duration_in_seconds % 60}`.slice(-2)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}

export default Track;


