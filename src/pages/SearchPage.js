import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import useFetch from "../useFetch";

import NoMatchPage from "./NoMatchPage";
import Loading from "./LoadingPage";

import Header from "../components/Header";
import NewsItem from "../components/NewsItem";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const SearchPage = () => {
  const {
    searchValue,
    setShowInputSearchBar,
    setShowMenu,
    getLink,
    getImg_url,
  } = useGlobalContext();

  const { data, isLoading, isError, fetchData } = useFetch(
    getLink(searchValue)
  );

  useEffect(() => {
    if (!searchValue) return;

    fetchData(getLink(searchValue));
  }, [searchValue]);

  useEffect(() => {
    setShowInputSearchBar(false);
    setShowMenu(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <NoMatchPage />;
  if (!data) return <NoMatchPage />;
  const listNews = data.response.docs;
  if (listNews.length < 1) return <NoMatchPage />;

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

              return (
                <NewsItem
                  key={title}
                  title={title}
                  {...elem}
                  url={elem.multimedia[8] ? getImg_url(elem.multimedia[8].url) : ''}
                />
              );
            })}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default SearchPage;
