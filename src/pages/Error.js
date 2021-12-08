import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";

const Error = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <section className="container error-container">
          <h1>Page Not Found</h1>
          <SearchBar />
          <Link to="/" className="link">
            Go back to home page
          </Link>
        </section>
      </main>
    </>
  );
};

export default Error;
