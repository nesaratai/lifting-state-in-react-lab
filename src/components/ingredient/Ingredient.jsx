

const Ingredient = ({ ingredient, onClick, action }) => {
    return (
      <li style={{backgroundColor: ingredient.color}}>
        {ingredient.name}
        <button onClick={onClick}>
            {action === "add" ? "Add" : "Remove"}
        </button>
      </li>
    );
  };
  
  export default Ingredient;