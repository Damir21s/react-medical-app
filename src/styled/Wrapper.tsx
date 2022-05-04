import styled from "styled-components";

export const Wrapper = styled.section<{
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