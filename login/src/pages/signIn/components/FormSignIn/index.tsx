import { useState } from 'react'
import * as S from './styles';
import logoTeddy from '../../../../assets/logo-preto.webp';
export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError] = useState('')
  const [passwordError] = useState('')


  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <img src={logoTeddy} alt='Teddy' style={{ maxWidth: 292 }}/>
      </S.TitleContainer>
      <br />
      <S.InputContainer>
        <S.InputBox
          value={email}
          placeholder="Informe o seu email"
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <S.ErrorLabel>{emailError}</S.ErrorLabel>
      </S.InputContainer>
      <br />
      <S.InputContainer>
        <S.InputBox
          value={password}
          placeholder="Informe a sua senha"
          onChange={(ev) => setPassword(ev.target.value)}
          type='password'
        />
        <S.ErrorLabel>{passwordError}</S.ErrorLabel>
      </S.InputContainer>
      <br />
      <S.ButtonContainer>
        <S.Button  type='button' value="Entrar" onClick={onButtonClick} title='Login' />
      </S.ButtonContainer>
    </S.MainContainer>
  )
}
