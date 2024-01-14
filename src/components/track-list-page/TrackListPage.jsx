import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Tracklist from "../track-list/Tracklist";
import AudioPlayer from "../audio-player/AudioPlayer";
import Sidebar from "../sidebar/Sidebar";
import * as S from "./TrackListPage.styles";
import NavMenu from "../nav-menu/NavMenu";

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
