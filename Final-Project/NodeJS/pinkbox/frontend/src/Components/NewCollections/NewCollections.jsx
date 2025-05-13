import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

console.log("NewCollections.jsx");

const NewCollections = (props) => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {props.data.map((item,index)=>{
              return <Item id={item.id} key={index} title={item.title} image={item.image}  cost={item.cost}/>
            })}
      </div>
    </div>
  )
}

export default NewCollections
