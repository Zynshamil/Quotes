import React from 'react';
import { useState, useEffect } from 'react';


function Home() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("")
  // https://api.quotable.io/random
  return (
    <div className='quotes'>
      <div className='content'>
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <button className="btn"> Generate New Quotes </button>
    </div>
  )
}

export default Home