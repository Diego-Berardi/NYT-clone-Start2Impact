import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import Menu from "../components/Menu";

import NoMatchPage from "./NoMatchPage";
import Loading from "./LoadingPage";

const Home = () => {


  const {
    HomePageNews,
    showMenu,
    setShowMenu,
    isError,
    isLoading,
    fetchHomePageNews,
  } = useGlobalContext();

  useEffect(() => {
    fetchHomePageNews();
    setShowMenu(false);
  }, []);


  if(isLoading) return <Loading />

  if (isError ||( HomePageNews.length <1 && !(isLoading)) ) return <NoMatchPage />;

  return (
    <>
      <Header />
      <Menu />
      <main>
        <section className="container section-news ">
          <NewsContainer
            classContainer="main-news-container"
            classItem="main-news-item"
            listNews={HomePageNews.filter((elem, i) => i < 10)}
          />
          <NewsContainer
            classContainer="aside-news-container"
            classItem="aside-news-item"
            listNews={HomePageNews.filter((elem, i) => i >= 10 && i < 16)}
          />
          <NewsContainer
            classContainer="footer-news-container"
            classItem="footer-news-item"
            listNews={HomePageNews.filter((elem, i) => i >= 16)}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
