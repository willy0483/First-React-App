
import { FavoriteFoodsStyled } from "./FavoriteFoods.styled";


export const FavoriteFoods = props => {
    console.log(props);
    
    return(
        <FavoriteFoodsStyled>
            <h3>Favorite Foods</h3>
            <ul>
                {props.foods.map((food, index) => {
                    return <li key={index}>{food}</li>;
                })}
            </ul>
        </FavoriteFoodsStyled>
    )
}