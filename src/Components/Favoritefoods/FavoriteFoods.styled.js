import styled from "styled-components";
import { colors, mixins } from "../../Styles/styles";

export const FavoriteFoodsStyled = styled.section`
  background-color: ${colors.accent};
  width: 400px;
  margin: auto;
  h3 {
    text-align: center;
    color: ${colors.primary};
  }
  color: ${colors.text};
  ul {
    ${mixins.resetList}
  }
`;
