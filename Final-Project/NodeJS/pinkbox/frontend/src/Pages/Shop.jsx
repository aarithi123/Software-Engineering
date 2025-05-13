import React, { useEffect, useState } from 'react';
import Home from '../Components/Home/Home';
import NewCollections from '../Components/NewCollections/NewCollections';
import search_icon from '../Components/Assets/search.png'; // Import search icon

console.log("Shop.jsx");

const Shop = () => {
  const [newcollection, setNewCollection] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredCollection, setFilteredCollection] = useState([]);

  const fetchInfo = () => {
    fetch('http://localhost:4000/allmovies')
      .then((res) => res.json())
      .then((data) => {
        setNewCollection(data);
        setFilteredCollection(data); // Initialize with full data
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    if (newQuery.trim() === '') {
      setFilteredCollection(newcollection);
    } else {
      const movie = newcollection.filter(
        movie => movie.title && movie.title.toLowerCase().includes(newQuery.toLowerCase())
      );
      setFilteredCollection(movie);
    }
  };

  return (
    <div>
      <Home />
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Enter movie title"
          className="search-input"
        />
        <img
          src={search_icon}
          alt="Search"
          className="search-icon"
          onClick={() => handleSearch(query)}
        />
      </div>
      <NewCollections data={filteredCollection} />
    </div>
  );
};

export default Shop;
