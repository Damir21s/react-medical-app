import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledFlex } from '../../styled/StyledFlex'
import onlineReception from '../../pictures/onlineReception.svg'
import anEmergency from '../../pictures/anEmergency.svg'
import cancerTreatment from '../../pictures/cancerTreatment.svg'
import { ComponentType } from '../../types/types'
import { ServicesItem } from './ServicesItem'
import { Button } from '../../styled/Button'
import { Container } from '../../styled/Container'
import { Wrapper } from '../../styled/Wrapper'
import styled from 'styled-components'

const ServicesItemWrapper = styled.div<{ borderb?: string }>`
box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
width: 328px;
height: 249px;
section{
  margin: 35px 40px 35px 40px;
  h3{
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    letter-spacing: 0.4px;
    line-height: 24px;
  }
  p{
    margin-top: 20px;
    color: var(--color-gray);
    font-weight: var(--fw-light);
    font-size: var(--fs-ms);
    line-height: 20px;
  }

  @media (max-width: 620px) {
  margin: 15px 40px 15px 40px;
  }
}

@media (max-width: 620px) {
  margin: 0px 14px 50px 14px;
  height: 228px;
}
`

const services = [
  { title: "Онлайн-прием", text: "Рыба текст", img: onlineReception },
  { title: "Экстренный случай", text: "Рыба текст", img: anEmergency },
  { title: "Лечение рака", text: "Рыба текст", img: cancerTreatment }
]

export const MainPage: React.FC<ComponentType> = (props) => {
  const navigate = useNavigate()
  return <Container>
    <Wrapper>
      <h1>Место для получения медицинской помощи</h1>
      <StyledFlex margin='-9px 0px 0px 0px' jc='none'>
        {props.isLoggedIn ?
          <Button
            marginr='10px' fs='var(--fs-ms)' fw='var(--fw-bold)'
            bgc='var(--color-orange)' color='white'
            onClick={() => {
              localStorage.clear()
              props.setIsLoggedIn(false)
              navigate('/')
            }}>Выйти</Button> :
          <Button
            marginr='10px' fs='var(--fs-ms)' fw='var(--fw-bold)'
            bgc='var(--color-orange)' color='white'
            onClick={() => props.setModalActive(true)}>Войти</Button>
        }
        <Link to='/contacts'>
          <Button
            fs='var(--fs-ms)'
            fw='var(--fw-bold)'>Контакты</Button>
        </Link>
      </StyledFlex>
    </Wrapper>
    <Wrapper display='flex' jc='space-between' margint='98px'>
      {services.map((service, index) => {
        return (<ServicesItemWrapper key={index}>
          <ServicesItem
            title={service.title}
            text={service.text}
            img={service.img}
          />
        </ServicesItemWrapper>)
      })}
    </Wrapper>
  </Container>

}
