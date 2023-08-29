import { getFilm } from "components/api-movie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import MovieDetails from "./MovieDetails";
// import { getFilm } from "components/api-movie";


const Home = () =>{
const [films, setFilms] = useState([]);

useEffect(() => {
  const loadFilm = async () =>{
    try{
      const filmData = await getFilm() 
      setFilms(filmData)
    }
    catch(error){
      console.log(error)
    }
  }
  loadFilm()
},[])

return (
  <div style={{display:'block'}}>
  {films ? (
    films.map((film) => (
      <Link key={film.id} to={`/film/${film.id}`} style={{ display: 'block', margin: '10px 10px' }}>{film.title}</Link>
    ))
  ) : (
    <p>No films available</p>
  )}
</div>
);
};



export default Home;