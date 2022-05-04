import styled from "styled-components"

export const StyledFlex = styled.div<{ margin?: string, jc?: string }> `
  justify-content: ${({ jc = 'space-between' }) => jc};
  margin: ${({ margin = '-3px 35px 0px 70px' }) => margin};
  display: flex;
  align-items: center;
  a{
    margin-right: 30px;
    font-weight: var(--fw-normal);
    font-size: 15px;
    line-height: 24px;
    color: var(--color-gray);
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