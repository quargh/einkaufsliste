import styled from "styled-components";

const StyledText = styled.p`
  margin: 10px;
  
  color: ${(props) => (props.intro ? "black" : "white")};
  background-color: ${({ intro }) =>
    intro ? "var(--primary-background)" : "transparent"};

  display: ${(props) => (props.isInvisible ? "none" : "block")};
  
  
`;

export default StyledText;