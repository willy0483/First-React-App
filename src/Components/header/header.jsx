import NavbarComponent from "../navbar/navbar";
import { HeaderStyled } from "../Header/Header.styled";


const HeaderComponent  = () =>{
    return(
        <HeaderStyled>     
            <h1>Header</h1>
            <NavbarComponent/>   
        </HeaderStyled>
    )
}

export default HeaderComponent;