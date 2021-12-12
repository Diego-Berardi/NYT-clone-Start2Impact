import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useGlobalContext } from "../context";

import Loading from "./LoadingPage";
import NoMatchPage from "./NoMatchPage";

const SingleNewsPage = () => {
  const { getLink, getImg_url } = useGlobalContext();

  const { title } = useParams();

  const { data, isLoading, isError } = useFetch(getLink(title));

  if (isLoading) return <Loading />;
  if (isError) return <NoMatchPage />;
  if (!data) return <NoMatchPage />;

  const theNews = data.response.docs[0];
  if (!theNews) return <NoMatchPage />;

  const { headline, multimedia, abstract, lead_paragraph, byline, pub_date } =
    theNews;
  const date = new Date(pub_date).toDateString();

  return (
    <>
      <Header />
      <Menu />
      <main>
        <section className="container single-news-container">
          <div>
            <h1>{headline.main}</h1>
            <p>{abstract}</p>
          </div>
          {multimedia[8] && <img src={getImg_url(multimedia[8].url)} alt="" />}
          <p>{lead_paragraph}</p>
          <p className="information">
            <span>{byline.original && `- ${byline.original}`}</span>
            <span>- Date: {date}</span>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SingleNewsPage;
