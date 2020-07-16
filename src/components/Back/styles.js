import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  a {
    display: flex;
    flex-direction: row;
    justify-self: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: ${palette.text};
    text-decoration: none;

    svg {
      font-size: 14px;
      color: ${palette.text};
    }
  }

  a:hover {
    color: ${palette.primaryLight};

    svg {
      color: ${palette.primaryLight};
    }
  }
`;
