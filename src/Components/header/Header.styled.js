import styled from "styled-components";
import { colors } from "../../Styles/styles";

export const HeaderStyled = styled.header`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${colors.primary};
    margin: 0.5rem 0;
  }
`;
