import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la requête API :",
          error
        );
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="mt-10">
      <label htmlFor="countrySelect">Sélectionnez un pays :</label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Sélectionnez un pays</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      {selectedCountry && <p>Vous avez sélectionné : {selectedCountry}</p>}
    </div>
  );
};

export default Test;
