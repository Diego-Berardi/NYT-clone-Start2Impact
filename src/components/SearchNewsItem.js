import React from "react";

const SearchNewsItem = ({ title, abstract, web_url }) => {
  return (
    <article className={`news-item `}>
      <a href={web_url}>
        <div className="content">
          <div>
            <h2 className="title-news">{title}</h2>
            <p className="abstract">{abstract}</p>
          </div>
          {/* <figure>
              <img src={url} alt={caption} />
              <figcaption>{copyright}</figcaption>
            </figure> */}
        </div>
        <div className="divider"></div>
      </a>
    </article>
  );
};

export default SearchNewsItem;
