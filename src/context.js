import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const api_key = process.env.REACT_APP_API_KEY;
const HomePageNews_url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${api_key}`;
const searchNews_urlBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`;

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const [showInputSearchBar, setShowInputSearchBar] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") return;

    const value = e.target[0].value;

    setShowMenu(false);
    setSearchValue(value);
    navigate(`/searchNews`);
  };

  const getImg_url = (url) => {
    return `https://static01.nyt.com/${url}`;
  };

  const getLink = (value) => {
    if (!value) return;
    const searchNews_url = `${searchNews_urlBase}q=${value}&api-key=${api_key}`;
    return searchNews_url;
  };

  return (
    <AppContext.Provider
      value={{
        HomePageNews_url,
        searchValue,
        setSearchValue,
        showInputSearchBar,
        setShowInputSearchBar,
        handleSubmit,
        showMenu,
        setShowMenu,
        getLink,
        getImg_url,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
