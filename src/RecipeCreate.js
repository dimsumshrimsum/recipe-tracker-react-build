import React, { useState } from "react";
import "./RecipeCreate.css";
function RecipeCreate({ handleFormSubmit }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [formInput, setFormInput] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });
  function handleChange({ target }) {
    setFormInput({ ...formInput, [target.name]: target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formInput);

    setFormInput({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  }
  const placeholder = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "Photo",
    ingredients: "Ingredients",
    preparation: "Preparation",
  };
  const [focus, setFocus] = useState(placeholder);

  function handleFocus(event) {
    const { name } = event.target;
    setFocus((focus) => ({ ...focus, [name]: "" }));
  }
  function handleBlur(event) {
    const { name } = event.target;
    setFocus((focus) => ({
      ...focus,
      [name]: placeholder[name],
    }));
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={focus.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={formInput.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder={focus.cuisine}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={formInput.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder={focus.photo}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={formInput.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder={focus.ingredients}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={formInput.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder={focus.preparation}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={formInput.preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
