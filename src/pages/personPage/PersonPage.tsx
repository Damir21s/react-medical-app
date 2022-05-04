import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../../styled/Button'
import { Container } from '../../styled/Container'
import { StyledFlex } from '../../styled/StyledFlex'
import { Wrapper } from '../../styled/Wrapper'
import { ComponentType } from '../../types/types'

export const PersonPage: React.FC<ComponentType> = (props) => {
  const userName = localStorage.getItem('name')
  const navigate = useNavigate();
  return <Container>
    <Wrapper margint='143px' ls='1.5px' >
      <h1>Привет, {userName} </h1>
      <StyledFlex margin='-19px 0px 0px 0px' jc='none'>
        <Button
          padding='15px 39px 15px 39px' fs='var(--fs-ms)' fw='var(--fw-bold)' ls='1px'
          marginr='10px' bgc='var(--color-orange)' color='white'
          onClick={() => {
            localStorage.clear();
            props.setIsLoggedIn(false);
            navigate('/')
          }}>Выйти из аккаунта</Button>
        <NavLink to='/contacts'>
          <Button
            padding='15px 39px 15px 39px'
            ls='1px' fs='var(--fs-ms)' fw='var(--fw-bold)' >Перейти в контакты</Button>
        </NavLink>
      </StyledFlex>
    </Wrapper>
  </Container>
}
