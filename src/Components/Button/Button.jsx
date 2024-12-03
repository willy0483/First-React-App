import { GreetingStyled } from "./Button.styled";


export const Button = props => {
    return (
        <GreetingStyled>
            <p>Hej, {props.textValue}!</p>
            <button>{props.textValue}</button>
        </GreetingStyled>
    );
}