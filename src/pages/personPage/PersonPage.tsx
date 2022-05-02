import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { StyledButton, StyledFlex } from '../../styled/styled'
import { SectionWrapper, StyledPage } from '../../styled/styled'
import { ComponentType } from '../../types/types'

export const PersonPage: React.FC<ComponentType> = (props) => {
  const userName = localStorage.getItem('name')
  const navigate = useNavigate();
  return <StyledPage>
    <SectionWrapper margint='143px' ls='1.5px' >
      <h1>Привет, {userName} </h1>
      <StyledFlex margin='-19px 0px 0px 0px' jc='none'>
        <StyledButton
          padding='15px 39px 15px 39px' fs='var(--fs-ms)' fw='var(--fw-bold)' ls='1px'
          marginr='10px' bgc='var(--color-orange)' color='white'
          onClick={() => {
            localStorage.clear();
            props.setIsAuth(false);
            navigate('/')
          }}>Выйти из аккаунта</StyledButton>
        <NavLink to='/contacts'>
          <StyledButton
            padding='15px 39px 15px 39px'
            ls='1px' fs='var(--fs-ms)' fw='var(--fw-bold)' >Перейти в контакты</StyledButton>
        </NavLink>
      </StyledFlex>
    </SectionWrapper>
  </StyledPage>
}
