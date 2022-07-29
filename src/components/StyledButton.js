import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  ${({ variant = "default" }) =>
    variant === "default" &&
    css`
      border: 1px solid black;
      color: white;
      background-color: var(--transparent);

      &:hover {
        background-color: var(--primary-background);
        color: black;
      }
    `}
 
  ${({ variant }) =>
    variant === "save" &&
    css`
      color: white;
      background-color: var(--secondary-color);

      &:hover {
        background-color: var(--primary-background);
        color: black;
      }
    `}

  ${({ variant }) =>
    variant === "reset" &&
    css`
      color: white;
      background-color: var(--primary-contrast-color);

      &:hover {
        background-color: var(--primary-background);
        color: black;
      }
    `}

    ${({ variant }) =>
      variant === "delete" &&
      css`
        color: white;
        background-color: var(--secondary-contrast-color);

        &:hover {
          background-color: var(--primary-background);
          color: black;
        }
      `}
`;

export default StyledButton;
