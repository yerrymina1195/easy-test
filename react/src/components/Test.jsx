import React, { useState } from "react";

const Test = () => {
  // const [boutonClique, setBoutonClique] = useState(false);

  // const handleBoutonClick = () => {
  //   setBoutonClique(!boutonClique);
  // };
  // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

  const [val, setVal] = useState("");
  const data = ["Java", "JavaScript", "React js", "Python", "C", "C++"];
  return (
    <div>
      <div className="dropdown">
        <input
          list="data"
          onChange={(e) => setVal(e.target.value)}
          placeholder="Search"
          className="input"
        />
        <datalist id="data">
          {data.map((op) => (
            <option>{op}</option>
          ))}
        </datalist>

        {/* <h1>{val}</h1> */}
      </div>

      {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
      {/* {boutonClique ? (
        // Afficher cet élément lorsque boutonClique est vrai (après le clic)
        <div>
          <img
            src="https://img.freepik.com/photos-gratuite/expression-du-visage-concept-personnes-emotionnelles_53876-121175.jpg?size=626&ext=jpg&ga=GA1.1.345113574.1684237935&semt=sph"
            alt=""
            className="w-full"
          />
          <button onClick={handleBoutonClick}>Réinitialiser</button>
        </div>
      ) : (
        // Afficher cet élément par défaut (avant le clic)
        <div>
          <img
            src="https://img.freepik.com/photos-gratuite/coup-moyen-silhouette-humaine-nature_23-2150203188.jpg?size=626&ext=jpg&ga=GA1.1.345113574.1684237935&semt=sph"
            className="w-full"
            alt=""
          />
          <button onClick={handleBoutonClick}>Cliquez-moi !</button>
        </div>
      )} */}
    </div>
  );
};

export default Test;
