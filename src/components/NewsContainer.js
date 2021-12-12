import React from "react";
import NewsItem from "../components/NewsItem";

const MainNewsContainer = ({listNews, classContainer, classItem}) => {
  
  return (
    <div className={`news-container ${classContainer}`}>
      {listNews.map((elem) => {
        const { url, copyright, caption } = elem.multimedia[0];
        return (
          <NewsItem
            key={elem.title}
            {...elem}
            classItem={classItem}
            url={url}
            copyright={copyright}
            caption={caption}
          />
        );
      })}
    </div>
  );
};

export default MainNewsContainer;
