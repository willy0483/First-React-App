import styled from "styled-components";
import { mixins, colors } from "../../Styles/styles.js";

export const NavbarStyled = styled.nav`
  ul {
    display: flex;
    ${mixins.resetList}
    li {
      padding: 1rem;
      a {
        color: ${colors.text};
        ${mixins.resetLink}
      }
      :hover {
        color: ${colors.primary};
      }
    }
  }
`;
