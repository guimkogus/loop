import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${palette.edge};
  border-style: solid;

  .content {
    justify-content: center;
  }
`;
