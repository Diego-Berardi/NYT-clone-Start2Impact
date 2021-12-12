import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ title, abstract, classItem, url, caption, copyright }) => {
  

  return (
    <article className={`news-item ${classItem}`}>
      <Link to={`/news/${title}`} >
        <div className="content">
          <div>
            <h3 className="title-news">{title}</h3>
            <p className="abstract">{abstract}</p>
          </div>

          <figure>
            <img src={url} alt={caption} />
            <figcaption>{copyright}</figcaption>
          </figure>
        </div>
        <div className="divider"></div>
      </Link>
    </article>
  );
};

export default NewsItem;
