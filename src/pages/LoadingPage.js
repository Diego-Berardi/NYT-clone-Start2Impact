import React from 'react'

import Header from "../components/Header";
import Menu from "../components/Menu";

const LoadingPage = () => {
    return (
      <>
        <Header />
        <Menu />
        <section className="container error-container">
            <h1>loading...</h1>
        </section>
      </>
    );
}

export default LoadingPage
