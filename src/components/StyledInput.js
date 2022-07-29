import styled, { css } from "styled-components";

const StyledInput = styled.input`
  border: none;
  padding: 10px 20px;
  margin-bottom: 20px;
 

  ${({ variant = "default" }) =>
    variant === "default" &&
    css`
      border: 1px solid white;
      color: white;
      background-color: var(--transparent);
      border-radius: 4px;
      outline: none;


    `}
  
`;

export default StyledInput;
