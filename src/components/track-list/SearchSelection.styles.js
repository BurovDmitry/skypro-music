
import { styled } from "styled-components";

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const FilterItem = styled.div`
  position: relative;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  z-index: 999;

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;

export const FilterNav = styled.div`
position: absolute;
top: 50px;
left: 0;
display: flex;
flex-direction: column;
width: 298px;
height: 200px;
background-color: #313030;
border-radius: 16px;
transition: transform 0.3s linear;
overflow: hidden;
padding: 20px;
`

export const FilterNavList = styled.ul`
display: flex;
flex-direction: column;
overflow-y: scroll;
height: 100%;
width: 100%;
`

export const FilterNavItems = styled.li`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
margin: 10px 0;

&:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  text-decoration: underline;
}
`