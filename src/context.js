import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const api_key = process.env.REACT_APP_API_KEY;
const HomePageNews_url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${api_key}`;
const search_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=italy&api-key=${api_key}`;

const AppProvider = ({ children }) => {
  const [HomePageNews, setHomePageNews] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const [showMenu, setShowMenu] = useState(false);
  const [showInputSearchBar, setShowInputSearchBar] = useState(false);
  const [isError, setIsError] = useState(false);

  const refContainer = useRef(null);
  let navigate = useNavigate();

  const fetchSearchList = async (value) => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=${api_key}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      setIsError(true);
    }
  };

  const fetchHomePageNews = async () => {
    try {
      const response = await fetch(HomePageNews_url);
      const data = await response.json();
      const list = data.results;
      setHomePageNews(list);
    } catch (error) {
      setIsError(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (refContainer.current.value === "") return;
    setSearchValue(refContainer.current.value);
    navigate(`/searchNews`);
  };

  useEffect(() => {
    fetchHomePageNews();
  }, []);

  return (
    <AppContext.Provider
      value={{
        HomePageNews,
        fetchSearchList,
        searchValue,
        setSearchValue,
        showInputSearchBar,
        setShowInputSearchBar,
        refContainer,
        handleSubmit,
        showMenu,
        setShowMenu,
        isError,
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
