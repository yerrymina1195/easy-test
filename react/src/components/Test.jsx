import React, { useState } from "react";

const Test = () => {
  const [boutonClique, setBoutonClique] = useState(false);
  // onClick={(e)=> {{boutonClique ? handleBoutonClick(e): alertee(e)}}}
  // const alertee = (e)=>{
  //   e.preventDefault();
  //   alert("dhfhfvdhvfd")
  // }
  const handleBoutonClick = () => {
    // Inversez la valeur de boutonClique pour basculer entre les éléments
    setBoutonClique(!boutonClique);
  };
  return (
    <div>
      {boutonClique ? (
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
      )}
    </div>
  );
};

export default Test;
