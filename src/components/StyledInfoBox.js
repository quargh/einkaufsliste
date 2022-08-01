import styled from "styled-components";

const StyledInfoBox = styled.div`
  position: relative;
  width: 300px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 3px;
  color:white;
  background-color: var(--primary-background);
  border: 1px solid var(--secondary-color);

  &::before {
    position: absolute;
    top: -20px;
    left: -10px;
    content: "!";
    font-size: 2rem;
    padding: 4px;
    background-color: var(--primary-contrast-color);
    color: white;
    
  }

  & span {
    background-color: white;
  }
`;

export default StyledInfoBox;