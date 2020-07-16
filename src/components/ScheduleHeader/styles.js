import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: ${palette.title};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  justify-content: center;
  align-items: center;

  p {
    color: ${palette.white};
    font-size: 18px;
  }
`;
