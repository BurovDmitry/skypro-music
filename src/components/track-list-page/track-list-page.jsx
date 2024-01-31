import React, { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Tracklist from "../track-list/track-list";
import Sidebar from "../sidebar/sidebar";
import * as S from "./track-list-page.styles";
import NavMenu from "../nav-menu/nav-menu";

const TrackListPage = ({ user, handleStartTrack }) => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  const handleShowSkeleton = (state) => {
    setShowSkeleton(state);
  };

  return (
    <div>
      <S.Main>
        <div>
          <NavMenu />
        </div>
        <Tracklist showSkeleton={showSkeleton} handleShowSkeleton={handleShowSkeleton} handleStartTrack={handleStartTrack} />
        <div>
          <Sidebar showSkeleton={showSkeleton} user={user} />
        </div>
      </S.Main>
      <div></div>
      <S.Footer></S.Footer>
    </div>
  );
};

export default TrackListPage;
