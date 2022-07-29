import styled from "styled-components";

const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: ${({ flexWrap = "wrap" }) => flexWrap};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  gap: ${({ gap = "10px" }) => gap};
`;

export default StyledFlex;