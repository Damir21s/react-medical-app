import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { StyledButton } from '../../styled/styled'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ComponentType } from '../../types/types'

const StyledInput = styled.input`
font-size: 20px;
    outline: none;
    border: 1px solid #000000;
    border-radius: 7px;
    height: 30px;
    display: block;
    margin-bottom: 20px;
    @media (max-width: 620px) {
         width: 200px;
     }

`
const StyledError = styled.p`
    margin-top: -20px;
    font-size: 12px;
    color: red;
    position: absolute;
`

export const Auth: React.FC<ComponentType> = (props) => {
    const data = require('../../data/data.json')
    const navigate = useNavigate()
    const checkLogin = (values:{login: string,password: string}) => {
        const dataAuth = data.find((item: {login: string,password: string}) =>
            item.login === values.login && item.password === values.password)
        if (dataAuth.login === values.login && dataAuth.password === values.password) {
            const authDataPerson = {
                'login': values.login,
                'password': values.password
            }
            localStorage.setItem('dataAuth', JSON.stringify(authDataPerson))
            localStorage.setItem('name', dataAuth.name)
            props.setIsAuth(true)
            navigate('/user')
        }
        else {
            props.setIsAuth(false)
        }
    }
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: values => {
            checkLogin(values)
            console.log('wdqd')
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
            <StyledButton type="submit" padding='8px 60px 8px 60px'
                onClick={() => props.setModalActive(!props.isAuth)}
                disabled={!formik.isValid}>Войти</StyledButton>
        </form>
    );
};