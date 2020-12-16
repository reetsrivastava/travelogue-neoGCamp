import React, { useState } from "react";
import "./styles.css";

const travelList = {
  holy: [
    { name: "The Holy City of Banaras", rating: "⭐⭐⭐⭐⭐" },
    {
      name: "Harmandir Sahib: The Golden Temple of Amritsar",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Sangam City, PrayagRaj",
      rating: "⭐⭐⭐⭐"
    }
  ],
  historical: [
    { name: "Hawa Mahal, Jaipur", rating: "⭐⭐⭐⭐⭐" },
    { name: "The Taj Mahal,Agra", rating: "⭐⭐⭐⭐" },
    { name: "Hampi, Karnataka", rating: "⭐⭐⭐⭐" }
  ],
  ecofriendly: [
    { name: "Khangchendzonga National Park, Sikkim", rating: "⭐⭐⭐⭐" },
    { name: "Lahaul Spiti, Himachal Pradesh", rating: "⭐⭐⭐" },
    { name: "Kerala - God's own Country", rating: "⭐⭐⭐⭐" }
  ]
};

const travelArray = Object.keys(travelList);

export default function App() {
  var [selectedType, setType] = useState("ecofriendly");

  function onClickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <h1>Travelogue</h1>
      <p>check the best youtube video suggestions for given genre</p>

      <hr />
      <div className="bookGenre">
        {travelArray.map((type) => (
          <button onClick={() => onClickHandler(type)}>{type}</button>
        ))}
      </div>
      <hr />
      <ul style={{ paddingInlineStart: "0" }}>
        {travelList[selectedType].map((place) => (
          <li key={place.name}>
            {" "}
            <div style={{ fontSize: "larger" }}> {place.name} </div>
            <div style={{ fontSize: "smaller" }}> {place.rating} </div>
          </li>
        ))}
      </ul>

      <footer>
        Made with ❤️ by{" "}
        <a href="https://portfoliors.netlify.app">Reet Srivastava</a>
      </footer>
    </div>
  );
}
