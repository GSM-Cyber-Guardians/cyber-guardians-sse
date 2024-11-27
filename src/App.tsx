import { useState } from 'react';
import * as S from './style';
import { Exclamation } from './Exclamation';

function App() {
  const [isBtnClick, setIsBtnClick] = useState<boolean>(false);
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
  const [isDetectionOn, setIsDetectionOn] = useState<boolean>(false);
  const [isSlidedDown, setIsSlidedDown] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 상태 추가

  const handleToggleClick = () => {
    setIsToggleOn((prev) => !prev);

    if (isToggleOn) {
      setIsDetectionOn(false);
      setIsSlidedDown(false);
    } else {
      setTimeout(() => {
        if (isBtnClick) {
          setIsDetectionOn(true);
          setTimeout(() => setIsSlidedDown(true), 1000);
        }
      }, 1000);
    }
  };

  const handleSnortTextClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.CenterImgContainer>
        <S.CenterImgBox isDetectionOn={isDetectionOn} isSlidedDown={isSlidedDown}>
          <S.DetectionText isSlidedDown={isSlidedDown}>공격 탐지됨</S.DetectionText>
          <S.CenterImg src={'../public/hacker.png'} />
          {isDetectionOn && (
            <S.ExclamationBox>
              <Exclamation />
            </S.ExclamationBox>
          )}
        </S.CenterImgBox>
        {isBtnClick ? (
          <S.Text isDetectionOn={isDetectionOn}>
            {isToggleOn ? <>공격 탐지 중....</> : <>snort를 켜서 로그를 탐색해보세요.</>}
          </S.Text>
        ) : (
          <S.CatchBtn
            onClick={() => {
              setIsBtnClick(true);
              setIsToggleOn(false);
            }}
          >
            Catch Attack
          </S.CatchBtn>
        )}
      </S.CenterImgContainer>
      <S.AttackListContainer isSlidedDown={isSlidedDown}>
        <S.AttackText>ATTACK</S.AttackText>
        <S.AttackListBox>
          <S.AttackList>
            [HTTP Attack] afjidasakfjs;j lisdjflaj;;,, j;aj;jaioja;fjs;oijfidsajfioa;ddddddddddsj
          </S.AttackList>
          <S.AttackList>
            [HTTP Attack] afjidasakfjs;j lisdjflaj;;,, j;aj;jaioja;fjs;oijfidsajfioa;ddddddddddsj
          </S.AttackList>
          <S.AttackList>
            [HTTP Attack] afjidasakfjs;j lisdjflaj;;,, j;aj;jaioja;fjs;oijfidsajfioa;ddddddddddsj
          </S.AttackList>
        </S.AttackListBox>
      </S.AttackListContainer>
      <S.Image src="https://www.cyberguardians.or.kr/images/common3/h_logo.png" />
      <S.ToggleContainer>
        <S.Toggle onClick={handleToggleClick} isOn={isToggleOn}>
          <S.ToggleCircle isOn={isToggleOn} />
        </S.Toggle>
        <S.SnortText onClick={handleSnortTextClick}>snort 란?</S.SnortText>
      </S.ToggleContainer>

      {isModalOpen && (
        <S.Modal>
          <S.CloseButton onClick={handleSnortTextClick}>×</S.CloseButton>
          <S.ModalImg src="../public/modalHacker.png" />
          <S.ModalContent>
            <S.ExplainTitle>SNORT 란?</S.ExplainTitle>
            <S.ExplaintContent>
              Snort는 네트워크 보안 도구로, 침입 탐지 시스템 (IDS, Intrusion Detection System)
              <br />및 침입 방지 시스템 (IPS, Intrusion Prevention System) 으로 사용됩니다.
            </S.ExplaintContent>
            <S.ExplainBox>
              <S.ExplainSubTitle>주요 기능</S.ExplainSubTitle>
            </S.ExplainBox>
            <S.ExplainSubContent>
              1. 네트워크 패킷 분석 및 로깅 : Snort는 네트워크 트래픽을 캡처하여 분석하고, 이를 기록합니다.
              <br />
              <br />
              2. 침입 탐지 : 규칙 기반으로 의심스러운 활동(예: 해킹 시도, 악성 코드 전송)을 탐지합니다.
              <br />
              <br />
              3. 침입 방지 : 탐지한 공격을 차단할 수 있도록 네트워크 트래픽을 제어할 수 있습니다.
              <br />
              <br />
              4. 다양한 규칙 지원 : Snort는 사용자가 커스터마이즈 가능한 규칙을 사용해 특정 패턴을 탐지합니다.
            </S.ExplainSubContent>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Wrapper>
  );
}

export default App;
