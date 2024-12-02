import NavbarComponent from "../navbar/navbar";

const HeaderComponent  = () =>{
    return(
        <header className="headerStyle">     
            <h1 className="headerTitleStyle">Header</h1>
            <NavbarComponent/>   
        </header>
    )
}

export default HeaderComponent;