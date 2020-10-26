import React, { useState } from 'react'

const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(Search_API + searchTerm).then((res) => res.json())
      .then((data) => {
        
        console.log(movies);
        setMovies(data.results);
      });
  
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleOnSubmit}>
        <input className="search" type="text"
          value={searchTerm}
          onChange={handleOnChange}
          placeholder="Search..." />
      </form>
    </div>
  )
}

export default Search
