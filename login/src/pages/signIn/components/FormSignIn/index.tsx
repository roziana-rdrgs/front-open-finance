/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import * as S from './styles';
import logoTeddy from '../../../../assets/logo-preto.webp';
export const Login = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['userEmail', 'userPassword']);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError] = useState('')
    const [passwordError] = useState('')
    const [rememberUser, setRememberUser] = useState(false)

    const onButtonClick = () => {
        if (rememberUser){
            setCookie('userEmail', email, { path: '/' });
            setCookie('userPassword', password, { path: '/' });
        }else{
            removeCookie('userEmail');
            removeCookie('userPassword');

            localStorage.setItem('userEmail', email);
        }
    }

    useEffect(() => {
        function checkCookie() {
            if(cookies.userEmail){
                setEmail(cookies.userEmail);
                setRememberUser(true);
            }
                
          }
          
        checkCookie();
      },[cookies.userEmail]);

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
            <S.InputCheckBoxContainer>
                <S.InputCheckBox
                    id="rememberUser"
                    checked={rememberUser}
                    placeholder="Manter conectado"
                    onChange={(ev) => setRememberUser(ev.target.checked)}
                    type='checkbox'
                />
                <label htmlFor="rememberUser">Manter conectado</label>
                <S.ErrorLabel>{passwordError}</S.ErrorLabel>
            </S.InputCheckBoxContainer>
            <br />

            <S.ButtonContainer>
                <S.Button  type='button' value="Entrar" onClick={onButtonClick} title='Login' />
            </S.ButtonContainer>
        </S.MainContainer>
  )
}
