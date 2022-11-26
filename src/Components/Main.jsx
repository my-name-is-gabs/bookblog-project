import React from "react";
import Card from "./Card";
import Search from "./Search";

const Main = () => {
  return (
    <main className="main-container">
      <div style={{ alignSelf: "flex-end" }}>
        <Search />
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Main;
