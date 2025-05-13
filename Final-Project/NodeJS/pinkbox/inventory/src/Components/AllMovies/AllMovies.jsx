import React, { useEffect, useState } from "react";
import "./AllMovies.css";
import cross_icon from '../Assets/cross_icon.png'
import { backend_url } from "../../App";

const AllMovies = () => {
  const [allmovies, setAllMovies] = useState([]);

  const fetchInfo = () => {
    fetch(`${backend_url}/listmovies`)
      .then((res) => res.json())
      .then((data) => setAllMovies(data))
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const removeMovie = async (title) => {
    console.log(JSON.stringify({ title: title }));
    await fetch(`${backend_url}/removemovie`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title }),
    })

    fetchInfo();
  }

  const removeMoviebyID = async (id) => {
    console.log(JSON.stringify({ id: id }));
    await fetch(`${backend_url}/removemovie`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })

    fetchInfo();
  }

  const getImageUrl = (image) => {
    return image.startsWith('http://') || image.startsWith('https://') ? image : `${backend_url}${image}`;
  }

  return (
    <div className="allmovies">
      <h1>All Movies</h1>
      <div className="allmovies-format-main">
        <p>Movies</p> <p>Title</p> <p>Genre</p> <p>Cost</p> <p>Release Date</p> <p>Remove</p>
      </div>
      <div className="allmovies-listmovies">
        <hr />
        {allmovies.map((e, index) => (
          <div key={index}>
            <div className="allmovies-format-main allmovies-format">
              <img className="allmovies-movie-icon" src={getImageUrl(e.image)} alt="" />
              <p className="cartitems-movie-title">{e.title}</p>
              <p>{e.genre}</p>
              <p>{e.cost}</p>
              <p>{new Date(e.dor).toISOString().split('T')[0]}</p>
              <img className="allmovies-remove-icon" onClick={() => { removeMovie(e.title) }} src={cross_icon} alt="" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
