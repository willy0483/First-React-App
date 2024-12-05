import "./App.scss";

import HeaderComponent from "./Components/header/header";
import FooterComponent from "./Components/footer/footer";

import { Main } from "./Main/Main";

import { Container } from "./Components/Container/Container";

import { Button } from "./Components/Button/Button";
import { FavoriteFoods } from "./Components/Favoritefoods/FavoriteFoods";

function App() {
  return (
    <Container width={"100%"}>
      <HeaderComponent />
      <Main>
        <Button textValue="Alice" />
        <Button textValue="Bob" />
        <Button textValue="Charlie" />

        <FavoriteFoods
          foods={["Pizza", "Sushi", "Ice Cream", "Pasta", "Burgers"]}
        />
      </Main>
      <FooterComponent />
    </Container>
  );
}

export default App;
