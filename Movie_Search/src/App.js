
import './App.css';
import {useEffect, useState} from 'react'
import search from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com/?apikey=e2a0a40d'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([])
 
 
  useEffect(() => {
    const initial= ["logan", "jumper",  "mission Impossible", "wonder women", "spiderman", "batman","ironman", "snowpiercer","god father","avengers"]

    const currentMovie = initial[Math.floor(Math.random()*initial.length)]
    searchMovies(currentMovie)
  }, [])

  

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  return (
    <div className="app">
      <h1>MovieFinder</h1>
      <div className="search">
        <input 
          placeholder="Search for Movies" 
          value={searchTerm}
          onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img src={search} alt="search" onClick={()=>searchMovies(searchTerm)}/>
      </div>
      {movies?.length>0 ? (
        <div className="container">
          {movies.map((movie) =>(
          <MovieCard movie ={movie} key={movie.imdbID}/>
          ))}
        </div>
      ):(
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
        )
      }
    </div>
  );
}

export default App;
