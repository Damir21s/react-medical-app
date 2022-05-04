import styled from "styled-components"

export const Button = styled.button<{
    padding?: string, bgc?: string, color?: string,
    marginr?: string, fs?: string, fw?: string, ls?: string
  }>`
    padding: ${({ padding = '15px 40px 15px 40px' }) => padding};
    font-size: ${({ fs = '20px' }) => fs};
    font-weight: ${({ fw = 'var(--fw-light)' }) => fw};
    letter-spacing: ${({ ls = '0.4px' }) => ls};
    color: ${({ color = 'var(--color-orange)' }) => color};
    background-color: ${({ bgc = 'transparent' }) => bgc};
    margin-right: ${({ marginr = 'none' }) => marginr};
    border: 2px solid var(--color-orange);
    border-radius: var(--radius);
    cursor: pointer;
  
    @media (max-width: 620px) {
      padding: ${({ padding }) => { if (padding === '5px 63px 5px 62px') return '4px 22px 4px 22px' }};
    }
  `