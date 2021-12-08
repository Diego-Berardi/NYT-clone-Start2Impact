import React from "react";
import { useGlobalContext } from "../context";
import NewsItem from "../components/NewsItem";

const MainNewsContainer = ({listNews, classContainer, classItem}) => {
  
  return (
    <div className={`news-container ${classContainer}`}>
      {listNews.map((elem, index) => {
        const { url } = elem;
        return (
          <NewsItem
            key={elem.title}
            {...elem}
            link_url={url}
            classItem={classItem}
          />
        );
      })}
    </div>
  );
};

export default MainNewsContainer;
