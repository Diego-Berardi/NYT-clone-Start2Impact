import React from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import imgLogoNYT from "../assets/img/1200px-NewYorkTimes.svg.png";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

import SearchBar from "./SearchBar";
const { DateTime, Info } = require("luxon");

const Header = () => {
  const {
    showInputSearchBar,
    setShowInputSearchBar,
    showMenu,
    setShowMenu,
  } = useGlobalContext();

  const toggleSearchBar = () => {
    setShowInputSearchBar(!showInputSearchBar);
  };

  const date = new Date();

  const now = DateTime.now();
  const dateStr = now.toFormat(" MMMM dd yyyy");
  const day = Info.weekdays("long", { locale: "en" })[date.getDay()];

  return (
    <header className="header-container">
      <nav>
        <div className="btn-container ">
          <button
            className="btn btn-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <GrClose /> : <FiMenu />}
          </button>
          <button className="btn btn-search" onClick={toggleSearchBar}>
            <BsSearch />
          </button>
          {showInputSearchBar && <SearchBar />}
        </div>
        <div className="img-container">
          <Link to="/">
            <img src={imgLogoNYT} alt="The New York Times" />
          </Link>
        </div>
        <div className="date">{`${day}, ${dateStr} `}</div>
      </nav>
    </header>
  );
};

export default Header;
