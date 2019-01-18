import React from 'react';
import styles from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyles>
      <TopBarContainer>
        <TopBarContainerLeft>
          <SpanLeft>TOPICS</SpanLeft>
          <SpanLeft>SEARCH</SpanLeft>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <SpanCenter>GENERAL</SpanCenter>
          <SpanCenter>BROWNBAG</SpanCenter>
          <SpanCenter>RANDOM</SpanCenter>
          <SpanCenter>MUSIC</SpanCenter>
          <SpanCenter>ANNOUNCEMENTS</SpanCenter>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarStyles>
  );
};

export default TopBar;

const TopBarStyles = styles.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styles.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
`;

const TopBarContainerLeft = styles.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const SpanLeft = styles.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const SpanCenter = styles.span`
  cursor: pointer;
  margin-right: 5%;
  
  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
`;

const TopBarContainerCenter = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const TopBarContainerRight = styles.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const SpanRight = styles.span`
  cursor: pointer;
`;
