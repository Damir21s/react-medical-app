import React, { useState } from 'react'
import { FormikProps, useFormik } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import { ComponentType } from '../../types/types'
import { Button } from '../../styled/Button'
import { useNavigate } from 'react-router-dom'

const StyledInput = styled.input`
    display: block;
    height: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    outline: none;
    border: 1px solid black;
    border-radius: var(--radius);
    @media (max-width: 620px) {
         width: 200px;
     }

`
const StyledError = styled.p`
    margin-top: -20px;
    font-size: 12px;
    color: red;
    position: absolute;
    @media (max-width: 620px) {
        font-size: 11px;
     }

`
interface FormikValues {
    login: string
    password: string
}

export const AuthPages: React.FC<ComponentType> = (props) => {
    const [isUserFound, setIsUserFound] = useState<boolean | null>(null)
    const navigate = useNavigate()
    const AuthFunction = (login: string, password: string) => {
        const data = require('../../data.json')
        const auth = data.find((item: { login: string, password: string }) =>
            item.login === login && item.password === password)
        if (auth) {
            debugger;
            const authDataPerson = {
                'login': login,
                'password': password
            }
            localStorage.setItem('dataAuth', JSON.stringify(authDataPerson))
            localStorage.setItem('name', auth.name)
            props.setIsLoggedIn(true)
            setIsUserFound(true)
            navigate('/user')
        }
        else {
            setIsUserFound(false)
        }
    }
    const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: values => {
            AuthFunction(values.login, values.password)
        },
        validationSchema: yup.object().shape({
            login: yup.string().min(5).max(20).required('Enter login'),
            password: yup.string().min(8).max(25).required('Enter password')
        })
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="login">Логин</label>
            <StyledInput
                id="login"
                name="login"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.login}
            />
            <StyledError>{formik.errors.login}</StyledError>
            <label htmlFor="password">Пароль</label>
            <StyledInput
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <StyledError>{formik.errors.password}</StyledError>
            {isUserFound === false && !formik.errors.password && <StyledError>Пользователь не найден</StyledError>}
            <Button type="submit" padding='8px 60px 8px 60px'
                onClick={() => {
                    props.setModalActive(!props.isLoggedIn)
                }}
                disabled={!formik.isValid}>Войти</Button>
        </form>
    );
};