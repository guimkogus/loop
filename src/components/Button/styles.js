import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  button {
    color: ${palette.white};
    background-color: ${palette.primary};
    height: 50px;
    width: 130px;
    text-transform: capitalize;
  }

  button:hover {
    transition: 0.3s;
    background-color: ${palette.primaryDark};
  }
`;
