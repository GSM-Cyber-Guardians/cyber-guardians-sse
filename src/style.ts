import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #111;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 10.6875rem;
  height: 4.0625rem;
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const CenterImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const CenterImgBox = styled.div<{ isDetectionOn: boolean; isSlidedDown: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  transition: transform 1s ease-in-out;
  transform: ${(props) =>
    props.isSlidedDown ? 'translate(-550px, 100px)' : props.isDetectionOn ? 'translateX(-550px)' : 'translateX(0)'};
`;

export const DetectionText = styled.div<{ isSlidedDown: boolean }>`
  color: #f00;
  font-size: 2rem;
  font-weight: 600;
  line-height: normal;
  opacity: ${(props) => (props.isSlidedDown ? 1 : 0)};
  transition: opacity 1s ease, transform 1s ease;
  transform: ${(props) => (props.isSlidedDown ? 'translateY(0)' : 'translateY(-20px)')}; // 부드러운 나타남
`;

export const ExclamationBox = styled.div`
  position: absolute;
  top: 73%;
  left: 48.5%;
`;

export const CenterImg = styled.img`
  width: 18.625rem;
  height: 20.6875rem;
`;

export const CatchBtn = styled.button`
  display: flex;
  width: 19.5rem;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 3.75rem;
  border: 2px solid #d6d6d6;
  background: #fff;
  color: #111;
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const Text = styled.p<{ isDetectionOn: boolean }>`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  line-height: normal;
  opacity: ${(props) => (props.isDetectionOn ? 0 : 1)};
  transition: opacity 1s ease;
`;

export const ToggleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
  top: 5%;
  right: 5%;
`;

export const Toggle = styled.div<{ isOn: boolean }>`
  display: flex;
  width: 3.5rem;
  height: 2rem;
  padding: 0.25rem;
  align-items: center;
  border-radius: 1.875rem;
  background: ${(props) => (props.isOn ? '#4caf50' : '#9d9d9d')};
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;
`;

export const ToggleCircle = styled.div<{ isOn: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.isOn ? 'calc(100% - 1.75rem)' : '0.25rem')};
  transform: translateY(-50%);
  transition: left 0.3s ease;
`;

export const SnortText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
  }
`;

export const AttackListContainer = styled.div<{ isSlidedDown: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 42.5rem;
  gap: 1.5rem;
  top: 20%;
  left: 50%;
  width: 53rem;
  visibility: ${(props) => (props.isSlidedDown ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isSlidedDown ? 1 : 0)};
  transition: height 1s ease, opacity 1s ease, visibility 1s ease, transform 1s ease;
  border-radius: 1.25rem;
  background: #fff;
  z-index: 10;

  @media (max-width: 1750px) {
    left: 37.5%;
    top: 17.5%;
  }
`;

export const TextBox = styled.button<{ isLeft: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 5.92988rem;
  border-radius: 1.25rem;
  background: ${(props) => (props.isLeft ? '#fff' : '#DDD')};
  color: ${(props) => (props.isLeft ? '#000' : '#B2B4B8')};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const TextBoxContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const AttackListBox = styled.div<{ isLeft: boolean }>`
  position: relative;
  padding: 1.5rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 50rem;
  height: ${(props) => (props.isLeft ? '31.75rem' : '35.0625rem')};
  border-radius: 1.25rem;
  background: #eee;
  overflow: scroll;
`;

export const AttackList = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  color: #f00;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: normal;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 68.3125rem;
  height: 37.4375rem;
  border-radius: 1.25rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.875rem;
  z-index: 100;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  font-weight: 500;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    color: #ff0000;
  }
`;

export const ModalImg = styled.img`
  width: 24.875rem;
  height: 24rem;
`;

export const ModalContent = styled.div`
  display: flex;
  width: 30.375rem;
  height: 32.8125rem;
  padding: 2rem 2.6875rem 0rem 2.6875rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 1.25rem;
  background: #eee;
  overflow: scroll;
`;

export const ExplainTitle = styled.p`
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
`;

export const ExplaintContent = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: normal;
`;

export const ExplainBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

export const ExplainSubTitle = styled.p`
  color: #000;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: normal;
`;

export const ExplainSubContent = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: normal;
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const SelectItem = styled.button<{ isSelected: boolean }>`
  display: flex;
  width: 10.25rem;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: ${(props) => (props.isSelected ? '' : '1px solid #979797')};
  background: ${(props) => (props.isSelected ? '#878787' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : '#111')};
  text-align: center;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? 'none' : '')};
`;
