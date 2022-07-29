import styled from "styled-components";

const StyledText = styled.p`
  margin: 20px;
  color: ${(props) => (props.brokkoli ? "black" : "white")};
  background-color: ${({ brokkoli }) =>
    brokkoli ? "var(--primary-background)" : "transparent"};
`;

export default StyledText;