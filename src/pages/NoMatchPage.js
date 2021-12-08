import React from "react";
import {Link} from "react-router-dom";


import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Menu from "../components/Menu";

const NomatchPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <section className="container error-container">
          <h1>No News Found...</h1>
          <p>try again.</p>
          <SearchBar />
          <Link to="/" className="link">
            Go back to home page
          </Link>
        </section>
      </main>
    </>
  );
};

export default NomatchPage;
