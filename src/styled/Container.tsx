import styled from "styled-components";

export const Container = styled.div`
  width: 1046px;
  margin: 0 auto;
  margin-bottom: 10%;
  h1{
    font-weight: var(--fw-bold);
    letter-spacing: 2px;
    font-size: 57px;
    line-height: 1.33;
  }

  @media (max-width: 1100px) {
    width: 620px;
    display: block;
    h1{
    font-weight: var(--fw-normal);
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