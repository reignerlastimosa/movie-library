import { useEffect, useState } from 'react';



import './App.css';
import SearchIcon from './search.svg';
import Card from './components/Card';
//2500908


const API = 'http://www.omdbapi.com?apikey=2500908';



const App = () =>{
  const[movies,setMovies] = useState([]);
  const[searchMovie, setSearchMovie] = useState('')

  const search = (e) =>{
    setSearchMovie(e.target.value);
  }

  const searchClick = () =>{
    searchMovies(searchMovie);
  }
  
  const searchMovies = async (title) =>{
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); 
  }

  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  return(
    <div className ="app">
      <h1> Movie Library</h1>
      <div className="search">
        <input onChange ={search}placeholder ="Search for Movies" value={searchMovie}/>
        <img src={SearchIcon} onClick={searchClick} />
      </div>

    {
    movies?.length > 0? (
      <div className ="container">
        {
          movies.map((movie)=>( 
            <Card movie={movie}/>
          ))
          
        }
        
      </div>
    ) : (
      <div className ="empty">
        <h2> No movies found</h2>
        </div>
    )
     }
      

    
    </div>
  );
}



export default App;