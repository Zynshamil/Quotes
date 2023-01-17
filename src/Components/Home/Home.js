import React from 'react';
import { useState, useEffect } from 'react';
import './home.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Home() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("")
  // https://api.quotable.io/random

  useEffect(() => {
    fetch("https://api.quotable.io/random")
    .then(res =>res.json())
    .then(
       (quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
        console.log(quote)
       })
    
  }, []);
  
  let newQuote = ()=>{
    fetch("https://api.quotable.io/random")
    .then(res =>res.json())
    .then(
       (quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      
       })
  }

  return (
    <div className='home'>
      
      <div className='content'>
        <h2 className='textarea'>{quote}</h2>
        <h4 className='author-area'>{author}</h4>
      </div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            /random
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button onClick={newQuote} className="btn">Next Quote </button>
    </div>
  )
}

export default Home