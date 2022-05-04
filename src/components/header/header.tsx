import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledFlex } from '../../styled/StyledFlex'
import logo from '../../pictures/logo.svg'
import { ComponentType } from '../../types/types'
import { Button } from '../../styled/Button'

const HeaderWrapper = styled.header`
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
                {props.isLoggedIn ?
                    <Button padding='5px 63px 5px 62px'
                        onClick={() => {
                            localStorage.clear();
                            props.setIsLoggedIn(false);
                            navigate('/')
                        }}>Выйти</Button> :
                    <Button padding='5px 63px 5px 62px'
                        onClick={() => props.setModalActive(true)}>
                        Войти
                    </Button>
                }
            </StyledFlex>
        </StyledFlex>
    </HeaderWrapper>
}