import { getMovieDetails } from "components/api-movie";
import { useEffect, useState } from "react";
import {useParams, Link, Outlet} from "react-router-dom"


const MovieDetails = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() =>{
    const loadDetails = async () =>{
      try{
        const filmDetails = await getMovieDetails(movieId) 
        setMovieDetails(filmDetails)
      }
      catch(error){
        console.log(error)
      }
    }
    loadDetails();
  },[movieId]
  )

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      
    
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>{movieDetails.overview}</p>
      <p>Genres: {movieDetails.genres.map(genre => genre.name).join(", ")}</p>
      <ul>
      <li>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/review`}>Rewiew</Link>
      </li>
    </ul>
<Outlet/>
    </div>
  );
    

};

export default MovieDetails;
