import { MainStyle } from "./Main.Styled";

/**
 * @param {object} props.children
 * @returns main html element
 */

export const Main = ({ children }) => {
  return <MainStyle>{children}</MainStyle>;
};
