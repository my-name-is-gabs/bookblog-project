import React from "react";
import Card from "./Card";
import Search from "./Search";
import Hero from "./Hero";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Hero />
      <div>
        <main className="main-container">
          <div style={{ alignSelf: "flex-end" }}>
            <Search />
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 w-full">
            <a href="#card" className="card-link">
              <Card />
            </a>
            <a href="#card" className="card-link">
              <Card />
            </a>
            <a href="#card" className="card-link">
              <Card />
            </a>
            <a href="#card" className="card-link">
              <Card />
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Main;
