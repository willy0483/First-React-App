import { FooterStyled } from '../Footer/Footer.styled';

const FooterComponent = () => {
    return (
        <FooterStyled>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </FooterStyled>
    )
}

export default FooterComponent;