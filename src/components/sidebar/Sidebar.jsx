import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./sidebar.styles";

function Sidebar({ showSkeleton, user }) {
  console.log(user);
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink to="/category/1">
              {showSkeleton ? (
                <Skeleton width="250px" height="150px" baseColor="#202020" />
              ) : (
                <S.SidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                ></S.SidebarImg>
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/2">
              {showSkeleton ? (
                <Skeleton width="250px" height="150px" baseColor="#202020" />
              ) : (
                <S.SidebarImg
                  src="img/playlist02.png"
                  alt="100 dance hits"
                ></S.SidebarImg>
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/3">
              {showSkeleton ? (
                <Skeleton width="250px" height="150px" baseColor="#202020" />
              ) : (
                <S.SidebarImg
                  src="img/playlist03.png"
                  alt="Indie charge"
                ></S.SidebarImg>
              )}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default Sidebar;


