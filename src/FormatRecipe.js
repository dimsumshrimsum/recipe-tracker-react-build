import React from "react";

function FormatRecipe({ recipe, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  return (
    <tr key={name}>
      <td>{name} </td>
      <td>{cuisine} </td>
      <td>
        {" "}
        <img src={photo} alt={` of ${name}`} />{" "}
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(recipe)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default FormatRecipe;
