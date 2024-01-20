import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Tracklist from "../track-list/track-list";
import AudioPlayer from "../audio-player/audio-player";
import Sidebar from "../sidebar/sidebar";
import * as S from "./track-list-page.styles";
import NavMenu from "../nav-menu/nav-menu";

const TrackListPage = ({ showSkeleton, user }) => {
  return (
    <div>
      <S.Main>
        <div>
          <NavMenu />
        </div>
        <Tracklist showSkeleton={showSkeleton} />
        <div>
          <Sidebar showSkeleton={showSkeleton} user={user}/>
        </div>
      </S.Main>
      <div>
        <AudioPlayer showSkeleton={showSkeleton} />
      </div>
      <S.Footer></S.Footer>
    </div>
  );
};

export default TrackListPage;
