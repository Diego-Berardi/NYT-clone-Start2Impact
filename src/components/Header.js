import React, { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import imgLogoNYT from "../assets/img/1200px-NewYorkTimes.svg.png";

import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

import SearchBar from "./SearchBar";

const Header = () => {
  const {
    setSearchValue,
    showInputSearchBar,
    setShowInputSearchBar,
    refContainer,
    handleSubmit,
    showMenu,
    setShowMenu,
  } = useGlobalContext();

  const toggleSearchBar = () => {
    setShowInputSearchBar(!showInputSearchBar);
  };

  const date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = month[date.getMonth()];
  const day = weekday[date.getDay()];

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
        <div className="date">{`${day}, ${monthName} ${date.getDate()} ${date.getFullYear()}`}</div>
      </nav>
    </header>
  );
};

export default Header;
