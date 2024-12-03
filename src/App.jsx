import './App.scss'

import HeaderComponent from './Components/header/header'
import FooterComponent from './Components/footer/footer'

import { Button } from './Components/Button/Button'
import { FavoriteFoods } from './Components/Favoritefoods/FavoriteFoods'

function App() {
  return (
    <>
    <HeaderComponent/>
    <main>
    <Button textValue="Alice" />
    <Button textValue="Bob" />
    <Button textValue="Charlie" />

    <FavoriteFoods foods={["Pizza", "Sushi", "Ice Cream", "Pasta", "Burgers"]} />

    </main>
    <FooterComponent/>
    </>
  )
}

export default App
