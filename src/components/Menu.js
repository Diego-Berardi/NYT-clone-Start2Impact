import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import { useGlobalContext } from '../context'

const Menu = () => {
    const {showMenu} = useGlobalContext();
    if(!showMenu) return <></>;
    return (

      <div className="menu-container">
        <Header />
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </div>
    );
}

export default Menu
