import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container footer">
      <h2>The New York Times Clone</h2>

      <div>
        <Link to="/" className="link link-footer">
          Home Page
        </Link>
        <Link to="/SearchNews" className="link link-footer">
          Search Page
        </Link>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Diego-Berardi"
        >
          <AiFillGithub className="icons link-footer" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/diego-berardi-095541202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B77P9wcucSaKjWeDwyefkiA%3D%3D"
        >
          <AiFillLinkedin className="icons link-footer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
