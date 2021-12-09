import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const axios = require("axios").default;

const api_key = process.env.REACT_APP_API_KEY;
const HomePageNews_url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${api_key}`;

const AppProvider = ({ children }) => {
  const [HomePageNews, setHomePageNews] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const [showMenu, setShowMenu] = useState(false);
  const [showInputSearchBar, setShowInputSearchBar] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  const fetchSearchList = async (value) => {
    setIsLoading(true);

    try {
      const res = await axios.get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        {
          params: {
            q: value,
            "api-key": api_key,
          },
        }
      );
      setIsLoading(false);

      return res.data;
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const fetchHomePageNews = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json",
        {
          params: {
            "api-key": `${api_key}`,
          },
        }
      );

      const list = res.data.results;

      setIsLoading(false);
      setHomePageNews(list);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") return;

    const value = e.target[0].value;

    setShowMenu(false);
    setSearchValue(value);
    navigate(`/searchNews`);
  };

  return (
    <AppContext.Provider
      value={{
        HomePageNews,
        fetchSearchList,
        searchValue,
        setSearchValue,
        showInputSearchBar,
        setShowInputSearchBar,
        handleSubmit,
        showMenu,
        setShowMenu,
        isError,
        isLoading,
        setIsLoading,
        fetchHomePageNews,
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
