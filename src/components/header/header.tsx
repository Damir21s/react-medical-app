import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, StyledFlex } from '../../styled/styled'
import logo from '../../picture/logo.svg'
import { ComponentType } from '../../types/types'

const HeaderWrapper = styled.div`
   padding: 29px 0px 18px 0px;
   @media (max-width: 620px) {
    padding-bottom:20px;
   }
`

export const Header: React.FC<ComponentType> = (props) => {
    const navigate = useNavigate()
    return <HeaderWrapper>
        <StyledFlex>
            <Link to='/'><img alt='logo' src={logo} /></Link>
            <StyledFlex>
                <Link to='/contacts'><a href='/'>Контакты</a></Link>
                {props.isAuth ?
                    <StyledButton padding='5px 63px 5px 62px'
                        onClick={() => {
                            localStorage.clear();
                            props.setIsAuth(false);
                            navigate('/')
                        }}>Выйти</StyledButton> :
                    <StyledButton padding='5px 63px 5px 62px'
                        onClick={() => props.setModalActive(true)}>
                        Войти
                    </StyledButton>
                }
            </StyledFlex>
        </StyledFlex>
    </HeaderWrapper>
}