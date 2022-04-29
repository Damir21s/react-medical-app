import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Line, SectionWrapper, StyledButton, StyledFlex, StyledPage } from '../../styled/styled'
import icon1 from '../../picture/icon1.svg'
import icon2 from '../../picture/icon2.svg'
import icon3 from '../../picture/icon3.svg'
import { ComponentType } from '../../types/types'

const InfoBlockWrapper = styled.div<{ borderb?: string }>`
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  width: 328px;
  height: 249px;
  section{
    margin: 35px 40px 35px 40px;
    h3{
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.4px;
      line-height: 24px;
    }
    p{
      margin-top: 20px;
      color:#737373;
      font-weight: 400;
      font-size: 14px;
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

export const MainPage: React.FC<ComponentType> = (props) => {
  const navigate = useNavigate()
  return <StyledPage>
    <SectionWrapper>
      <h1>Место для получения медицинской помощи</h1>
      <StyledFlex margin='-9px 0px 0px 0px' jc='none'>
        {props.isAuth ?
          <StyledButton
            marginr='10px' fs='14px' fw='700'
            bgc='#FF685B' color='#FFFFFF'
            onClick={() => {
              localStorage.clear()
              props.setIsAuth(false)
              navigate('/')
            }}>Выйти</StyledButton> :
          <StyledButton
            marginr='10px' fs='14px' fw='700'
            bgc='#FF685B' color='#FFFFFF'
            onClick={() => props.setModalActive(true)}>Войти</StyledButton>
        }
        <Link to='/contacts'>
          <StyledButton
            fs='14px'
            fw='700'>Контакты</StyledButton>
        </Link>
      </StyledFlex>
    </SectionWrapper>
    <SectionWrapper display='flex' jc='space-between' margint='98px'>
      <InfoBlockWrapper>
        <section>
          <img alt='icon1' src={icon1} />
          <h3>Онлайн-прием</h3>
          <Line borderb='2px solid #FF685B' widht='50px' />
          <p>Рыба текст</p>
        </section>
      </InfoBlockWrapper>
        <InfoBlockWrapper>
          <section >
            <img alt='icon2' src={icon2} />
            <h3>Экстренный Случай</h3>
            <Line borderb='2px solid #FF685B' widht='50px' />
            <p>Рыба текст</p>
          </section>
        </InfoBlockWrapper>
        <InfoBlockWrapper>
          <section>
            <img alt='icon3' src={icon3} />
            <h3>Лечение рака</h3>
            <Line borderb='2px solid #FF685B' widht='50px' />
            <p>Рыба текст</p>
          </section>
        </InfoBlockWrapper>
    </SectionWrapper>
  </StyledPage>

}
