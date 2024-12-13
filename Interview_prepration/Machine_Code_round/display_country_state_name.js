/*
    Each County have state, you suppose to show first all country name and on click country name it should show all state of particular country.
*/
import React, { useState } from "react";

export default function App() {
  const countries = [
    { name: "India", state: "Maharashtra" },
    { name: "India", state: "Karnataka" },
    { name: "India", state: "Tamil Nadu" },
    { name: "India", state: "Gujarat" },
    { name: "United States", state: "California" },
    { name: "United States", state: "Texas" },
    { name: "Canada", state: "Ontario" },
    { name: "Australia", state: "Victoria" },
  ];

  // Grouping states by country
  const groupedByCountry = countries.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = [];
    }
    acc[item.name].push(item.state);
    return acc;
  }, {});

  // State to track selected country
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      <h1>Countries and Their States</h1>
      {/* Display country names */}
      {Object.keys(groupedByCountry).map((country) => (
        <div key={country}>
          {/* On clicking a country, toggle the selected country */}
          <h2
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() =>
              setSelectedCountry(selectedCountry === country ? null : country)
            }
          >
            {country}
          </h2>
          {/* Show states if the country is selected */}
          {selectedCountry === country && (
            <ul>
              {groupedByCountry[country].map((state, index) => (
                <li key={index}>{state}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
