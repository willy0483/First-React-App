import NavbarComponent from "../navbar/navbar";

const HeaderComponent  = () =>{
    return(
        <>
        <header>     
            <h1>Header</h1>
            {<NavbarComponent/>}   
        </header>
        </>
    )
}

export default HeaderComponent ;