import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  .box {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .content {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    a {
      margin: 22px;
      font-size: 16px;
      font-weight: bold;
      color: ${palette.text};
      text-decoration: none;
    }

    a:hover {
      color: ${palette.primaryLight};
    }

    img {
      width: 80px;
      height: 45px;
    }
  }

  hr {
    height: 1px;
    background-color: ${palette.edge};
    border: none;
  }
`;
