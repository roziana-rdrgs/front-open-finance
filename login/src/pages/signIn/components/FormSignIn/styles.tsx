import styled from 'styled-components';
import { common } from './../../../../styles-global';

export const MainContainer = styled.div `
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TitleContainer = styled.div `
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1 `
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
`;

export const ResultContainer = styled.div `
  flex-direction: row;
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
`;

export const HistoryItem = styled.div `
  flex-direction: row;
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
`;

export const HistoryContainer = styled.div `
  flex-direction: column;
  display: flex;
  height: 200px;
  align-items: center;
  flex-grow: 5;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 260px;
`;

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ErrorLabel = styled.label `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: red;
  font-size: 12px;
`;

export const InputBox = styled.input `
  height: 48px;
  width: 350px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid ${common.colors.orange};
  padding-left: 15px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.input `
  height: 48px;
  width: 320px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid ${common.colors.orange};
  padding-left: 5px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    color: ${common.colors.dark};
    background-color: ${common.colors.orange};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
  &:focus {
    outline: none;
  }
`;
