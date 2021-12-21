import React from "react";

function Test() {
  const getRecipe = async (query) => {
    let res = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=48749e6b&app_key=%20e48b4d118c5df082474141e6e4746f1a`
    );
    let random = await res.json();
    console.log(random.hits[0]);
  };
  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.elements.usernameInput.value;
          if (!username) {
            return alert("Please enter username");
          } else {
            return getRecipe(username);
          }
        }}
      >
        <input
          type="text"
          id="usernameInput"
          placeholder="Enter a username..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test;
