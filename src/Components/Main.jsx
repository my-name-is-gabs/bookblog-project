import React from "react";
import Card from "./Card";
import Search from "./Search";

const Main = () => {
  return (
    <main className="main-container">
      <div style={{ alignSelf: "flex-end" }}>
        <Search />
      </div>
      <div className="card-grid-container">
        <div className="card-columns">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Main;
