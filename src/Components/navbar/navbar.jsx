
import { NavbarStyled } from "./Navbar.styled";

const NavbarComponent = () =>{
    return(
        <NavbarStyled>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
            </ul>
         </NavbarStyled>
    )
}

export default NavbarComponent;