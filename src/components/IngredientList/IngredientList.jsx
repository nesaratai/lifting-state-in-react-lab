import Ingredient from "../ingredient/Ingredient";

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => addToBurger(ingredient)}
            action = "add"
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;