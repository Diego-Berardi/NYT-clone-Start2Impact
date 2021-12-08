import React from "react";

const NewsItem = ({ title, multimedia, abstract, link_url, classItem }) => {
  if(!multimedia) {
    return <></>
  }
  const multimediaObj = multimedia[0];
  
  const { url, copyright, caption } = multimediaObj;

  return (
    <article className={`news-item ${classItem}`}>
      <a href={link_url}>
        <div className="content">
          <div>
            <h2 className="title-news">{title}</h2>
            <p className="abstract">{abstract}</p>
          </div>
          <figure>
            <img src={url} alt={caption} />
            <figcaption>{copyright}</figcaption>
          </figure>
        </div>
        <div className="divider"></div>
      </a>
    </article>
  );
};

export default NewsItem;
