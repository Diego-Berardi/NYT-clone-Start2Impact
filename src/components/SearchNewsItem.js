import React from "react";

const SearchNewsItem = ({ title, abstract, web_url }) => {
  return (
    <article className={`news-item `}>
      <a href={web_url}>
        <div className="content">
          <div>
            <h3 className="title-news">{title}</h3>
            <p className="abstract">{abstract}</p>
          </div>
        </div>
        <div className="divider"></div>
      </a>
    </article>
  );
};

export default SearchNewsItem;
