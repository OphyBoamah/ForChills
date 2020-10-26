import { React, useEffect, useState } from 'react';
import Movie from './components/Movie';


const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(Featured_API).then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
    

  }, []);

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
  // const Movies = ['1', '2', '3']
  return (
    <div>
      <div className="searchBox">
      <form onSubmit={handleOnSubmit}>
        <input className="search" type="text"
          value={searchTerm}
          onChange={handleOnChange}
          placeholder="Search..." />
      </form>
    </div>
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
      </div>
  );
}

export default App;
