import React, { useContext, useEffect, useState } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import MovieDisplay from '../Components/MovieDisplay/MovieDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

console.log("Movie.jsx")

const Movie = () => {
  const {movies} = useContext(ShopContext);
  const {movieId} = useParams();
  const [movie,setMovie] = useState(false);
  
  useEffect(()=>{
    setMovie(movies.find((e)=>e.id === Number(movieId)))
  },[movies,movieId])

    return movie ? (
    <div>
      <Breadcrums movie={movie}/>
      <MovieDisplay movie={movie}/>
      <DescriptionBox/>
    </div>
  ) : null
}

export default Movie
