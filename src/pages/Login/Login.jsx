import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LoginButton from '../../components/LoginButton/LoginButton'
import logo from '../../img/logo_modal.png'
import * as S from './styles'

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleNameChange = ({ target }) => {
        setUsername(target.value)
    }

    const handleEmailChange = ({ target }) => {
        setEmail(target.value)
    }

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    return (
        <S.Container>
            <S.FormWrapper>
                <S.Form>
                    <S.Logo src={logo} alt="logo" />
                    <S.Input
                        placeholder="Имя"
                        type="text"
                        onChange={handleNameChange}
                    />
                    <S.Input
                        placeholder="Email"
                        type="text"
                        onChange={handleEmailChange}
                    />
                    <S.Input
                        placeholder="Пароль"
                        type="password"
                        onChange={handlePasswordChange}
                    />
                    <LoginButton
                        email={email}
                        username={username}
                        password={password}
                    />
                    <S.SignupButton type="button" onClick={handleSignup}>
                        Зарегистрироваться
                    </S.SignupButton>
                </S.Form>
            </S.FormWrapper>
        </S.Container>
    )
}
