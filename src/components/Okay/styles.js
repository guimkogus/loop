import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: ${palette.primaryLight};
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${palette.white};
    font-size: 40px;
  }
`;
