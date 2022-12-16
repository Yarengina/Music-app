/* eslint-disable no-alert */
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin, setToken } from '../../store/slices/authSlice'
import { useGetTokenMutation, useUserLoginMutation } from '../../api/musicApi'
import * as S from './styles'

function LoginButton({ password, email }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, { data, isSuccess }] = useUserLoginMutation()
    const [getToken, { data: token, error: tokenError }] = useGetTokenMutation()

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert('Введите свои учетные данные или зарегистрируйтесь')
        } else {
            login({
                email,
                password,
            })
            getToken({
                email,
                password,
            })
        }
    }

    useEffect(() => {
        if (isSuccess) {
            document.cookie = `username=${data?.username}`
            dispatch(setToken(token?.access))
            document.cookie = `token=${token?.refresh}`
            dispatch(setLogin())
            navigate('/tracks')
        }
    }, [token])

    return (
        <>
            {tokenError && (
                <S.ErrorMessage>{tokenError.data.detail}</S.ErrorMessage>
            )}
            <S.FormButton type="button" onClick={(e) => onSubmitForm(e)}>
                Войти
            </S.FormButton>
        </>
    )
}

export default LoginButton
