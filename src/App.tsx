import React from "react";
import styled from "styled-components";
// import './App.css';
import MainContent from "./MainContent";
import NavigationBar from "./Nav";

const S = {
  PageWrapper: styled.div`
    // text-align: center;
  `,
};
function App() {
  return (
    <S.PageWrapper>
      <NavigationBar />
      <MainContent />
    </S.PageWrapper>
  );
}

export default App;
