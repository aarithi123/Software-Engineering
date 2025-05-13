// Search.jsx
import React, { useState } from 'react';
import search_icon from '../Assets/search.png'; // Assume you have a search icon image

const Search = ({ movies }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const movie = movies.find(movie => movie.name.toLowerCase() === query.toLowerCase());
    setResult(movie || null);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie name"
        className="search-input"
      />
      <img
        src={search_icon}
        alt="Search"
        className="search-icon"
        onClick={handleSearch}
      />
      {result ? (
        <div className="search-result">{result.name}</div>
      ) : (
        <div className="search-result">No movie found</div>
      )}
    </div>
  );
};

export default Search;
