import styled from "styled-components";
import { mixins, colors } from "../../Styles/styles";

export const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  padding: 1rem;
  box-sizing: border-box;

  ul {
    ${mixins.resetList}
    display: flex;
    gap: 1rem;
  }
  a {
    ${mixins.resetLink}
    color: white;
  }
  p {
    color: white;
  }
`;
