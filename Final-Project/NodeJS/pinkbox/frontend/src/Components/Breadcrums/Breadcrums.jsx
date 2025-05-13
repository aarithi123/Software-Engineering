import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

console.log("Breadcrums.jsx");

const Breadcrums = (props) => {
  const {movie} = props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {movie.genre} <img src={arrow_icon} alt="" /> {movie.title} 
    </div>
  )
}

export default Breadcrums
