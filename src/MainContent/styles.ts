import styled from "styled-components";

export const MainContentWrapper = styled.div`
  width: 100%;
`;
/* Create two unequal columns that floats next to each other */
/* Left column */
export const LeftColumn = styled.div`
  float: left;
  width: 25%;
  padding-top: 10px;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

/* Right column */
export const RightColumn = styled.div`
  float: left;
  width: 75%;
  padding-left: 20px;
  padding-top: 10px;
  border-left: 1px solid #c3c3c3;
  background: #f7f7f7;
  @media screen and (max-width: 800px) {
    border-left: none;
    width: 100%;
    padding: 0;
  }
}
`;
