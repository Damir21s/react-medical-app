import styled from "styled-components"

export const Line = styled.div<{ widht?: string, borderb?: string }>`
  width: ${({ widht = '100%' }) => widht};
  border-bottom: ${({ borderb = '2px solid #000000' }) => borderb};
`
export const StyledFlex = styled.div<{ margin?: string, jc?: string }> `
  display: flex;
  justify-content: ${({ jc = 'space-between' }) => jc};
  align-items: center;
  margin: ${({ margin = '-3px 35px 0px 70px' }) => margin};
  a{
    margin-right: 30px;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
    text-decoration: none;
  }
  @media (max-width: 620px) {
    margin: -3px 5px 0px 10px;
    margin: ${({ margin }) => { if (margin === '-9px 0px 0px 0px') return '45px 0px 0px 0px' }};
    a{
    margin-right: 5px;
   }
  }
  
`
export const StyledButton = styled.button<{
  padding?: string, bgc?: string, color?: string,
  marginr?: string, fs?: string, fw?: string, ls?: string
}>`
  padding: ${({ padding = '15px 40px 15px 40px' }) => padding};
  font-size: ${({ fs = '20px' }) => fs};
  font-weight: ${({ fw = '400' }) => fw};
  letter-spacing: ${({ ls = '0.4px' }) => ls};
  border: 2px solid #FF685B;
  border-radius: 7px;
  color: ${({ color = '#FF685B' }) => color};
  background-color: ${({ bgc = 'transparent' }) => bgc};
  margin-right: ${({ marginr = 'none' }) => marginr};
  cursor: pointer;
  @media (max-width: 620px) {
    padding: ${({ padding }) => { if (padding === '5px 63px 5px 62px') return '4px 22px 4px 22px' }};
  }
`
export const StyledPage = styled.div`
  width: 1046px;
  margin: 0 auto;
  margin-bottom: 10%;
  h1{
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 57px;
    line-height: 1.33;
  }
  @media (max-width: 1100px) {
    width: 50%;
    h1{
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 37px;
    line-height: 1.33;
    }
  }
  @media (max-width: 620px) {
    margin: 57px 0px 0px 10px;
    width: 100%;
    h1{
      font-size: 28px;
      line-height: 39px;
      letter-spacing: 0.8px;
    }
  }

`
export const SectionWrapper = styled.section<{
  display?: string, jc?: string, margint?: string, ls?: string
}>`
  margin-top: ${({ margint = '102px' }) => margint};
  display: ${({ display = 'block' }) => display};
  justify-content: ${({ jc = 'none' }) => jc};
  h1{
    letter-spacing: ${({ ls = 'none' }) => ls};
  }
  @media (max-width: 1100px) {
    margin-top: 51px;
    flex-direction: column-reverse;
  }
`