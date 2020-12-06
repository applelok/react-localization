import KeyJson from "../Example/KeyJson";
import Menu from "./Menu";
import * as S from "./styles";

export default function MainContent() {
  return (
    <S.MainContentWrapper>
      <S.LeftColumn>
        <Menu />
      </S.LeftColumn>
      <S.RightColumn>
        <KeyJson />
      </S.RightColumn>
    </S.MainContentWrapper>
  );
}
