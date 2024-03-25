import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "./api-movie";
import { CastList } from "./Cast.styled";

export const Cast = () =>{
  const {movieId} = useParams();
  const [casts, setCast] = useState({ cast: [] });

  useEffect(() =>{
    const loadCast = async () =>{
      try{
        const FilmCast = await getCast(movieId) 
        setCast(FilmCast)
      }
      catch(error){
        console.log(error)
      }
    }
    loadCast();
  },[movieId]
  )


  return ( 
    <div>
    <h2>Cast</h2>
    <CastList>
      {casts.cast.map(actor => (
        <li key={actor.id}>   {actor.profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
            alt={actor.name}
          />
        )}
      {actor.name}</li>
      ))}
    </CastList>
  </div>
);
}