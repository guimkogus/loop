import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  button {
    color: ${palette.white};
    background-color: ${palette.primary};
    height: 50px;
    width: 150px;
    text-transform: capitalize;
    font-weight: bold;
  }

  button:hover {
    transition: 0.3s;
    background-color: ${palette.primaryDark};
  }
`;
