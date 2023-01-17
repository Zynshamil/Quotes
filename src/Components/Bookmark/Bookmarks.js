import React, { useState } from 'react'
import './bookmarks.css'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


function Bookmarks() {

  const [data, setData] = useState(JSON.parse(localStorage.getItem("favorites")))
  // JSON.parse(localStorage.getItem("favorites"))
  console.log("Bookmarh", data)





  return (
    <div className= 'page' >
      <div className='fav'>
      <h1 className='h1'>Favorite Quotes</h1>
      {data.favorites.map((item) => (
        
            <div className='grid'>
             <ul>{item.content}</ul>
             <p className='p'>{item.author}</p> 
             
              </div>
          
        
      ))
      }
      </div>
    </div>
  )
}

export default Bookmarks