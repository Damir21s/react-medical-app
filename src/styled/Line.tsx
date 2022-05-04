import styled from "styled-components";

export const Line = styled.div<{ widht?: string, borderb?: string }>`
  width: ${({ widht = '100%' }) => widht};
  border-bottom: ${({ borderb = '2px solid black' }) => borderb};
`