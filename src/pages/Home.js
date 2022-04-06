import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import NoMatchPage from "./NoMatchPage";
import Loading from "./LoadingPage";

import useFetch from "../useFetch";
import { AiOutlineConsoleSql } from "react-icons/ai";


const Home = () => {
  const { setShowMenu, HomePageNews_url } = useGlobalContext();

  const { data, isLoading, isError } = useFetch(HomePageNews_url);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <NoMatchPage />;
  if (!data) return <NoMatchPage />;

  const homePageNews = data.results;
  console.log(homePageNews)

  return (
    <>
      <Header />
      <Menu />
      <main>
        <section className="container section-news ">
          <NewsContainer
            classContainer="main-news-container"
            classItem="main-news-item"
            listNews={homePageNews.filter((elem, i) => i < 10)}
          />
          <NewsContainer
            classContainer="aside-news-container"
            classItem="aside-news-item"
            listNews={homePageNews.filter((elem, i) => i >= 10 && i < 16)}
          />
          <NewsContainer
            classContainer="footer-news-container"
            classItem="footer-news-item"
            listNews={homePageNews.filter((elem, i) => i >= 16)}
          />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
