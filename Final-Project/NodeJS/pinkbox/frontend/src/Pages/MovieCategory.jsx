import React, { useEffect, useState } from "react";
import "./CSS/MovieCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import search_icon from '../Components/Assets/search.png';
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

console.log("MovieCategory.jsx");

const MovieCategory = (props) => {
  const [allMovies, setAllMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // New state for sorting order

  const fetchInfo = () => {
    fetch('http://localhost:4000/allmovies')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setAllMovies(data);
        setFilteredMovies(data); // Initialize with full data
      })
      .catch((error) => console.error('Fetch error:', error));
  }

  useEffect(() => {
    fetchInfo();
  }, []);  // Add dependencies here if needed

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    if (newQuery.trim() === '') {
      setFilteredMovies(allMovies);
    } else {
      const filtered = allMovies.filter(
        movie => movie.title && movie.title.toLowerCase().includes(newQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const handleSort = (order) => {
    const sortedMovies = [...filteredMovies].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (order === 'asc') {
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      } else {
        return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
      }
    });
    setFilteredMovies(sortedMovies);
    setSortOrder(order);
  };

  const displayedMovies = filteredMovies.filter(movie =>
    movie.genre.split(',').map(genre => genre.trim()).includes(props.category)
  );

  return (
    <div className="moviecategory">
      <img src={props.banner} className="moviecategory-banner" alt="" />
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
      <div className="moviecategory-indexSort">
        <p><span>Showing {displayedMovies.length} out of {allMovies.length} Movies</span></p>
        <div className="moviecategory-sort">
          Sort by: 
          <select onChange={(e) => handleSort(e.target.value)} value={sortOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="moviecategory-movies">
        {displayedMovies.map((item) => (
          <Item id={item.id} key={item.id} title={item.title} image={item.image} cost={item.cost} />
        ))}
      </div>
      <div className="moviecategory-loadmore">
        <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default MovieCategory;
