import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

import NoMatchPage from "./NoMatchPage";

import Header from "../components/Header";
import SearchNewsItem from "../components/SearchNewsItem";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";

const SearchPage = () => {
  const {
    searchValue,
    setSearchValue,
    setShowInputSearchBar,
    showMenu,
    setShowMenu,
  } = useGlobalContext();
  const { fetchSearchList } = useGlobalContext();
  const [listNews, setListNews] = useState([]);

  const getData = async () => {
    const data = await fetchSearchList(searchValue);
    setListNews(data.response.docs);
  };

  useEffect(() => {
    if (searchValue === undefined) return;

    getData();
  }, [searchValue]);

  useEffect(() => {
    setShowInputSearchBar(false);
    setShowMenu(false);
  }, []);

  if (searchValue === undefined) return <NoMatchPage />;

  return (
    <>
      <Header />
      <Menu />
      <main>
        <section className="container">
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="search-news-container">
            {listNews.map((elem) => {
              const title = elem.headline.main;
              return <SearchNewsItem key={title} {...elem} title={title} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchPage;