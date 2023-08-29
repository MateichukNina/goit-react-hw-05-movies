import { getMovieDetails } from "components/api-movie";
import { useEffect, useState } from "react";
import {useParams, Link, Outlet} from "react-router-dom"


const MovieDetails = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() =>{
    const loadDetails = async () =>{
      try{
        const filmDetails = await getMovieDetails() 
        setMovieDetails(filmDetails)
      }
      catch(error){
        console.log(error)
      }
    }
    loadDetails();
  },[movieId]
  )


  return <div>
        
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      {/* Дополнительные детали о фильме */}
    
    <img alt=''/>
    <p>Info</p>
    
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="review">Rewiew</Link>
      </li>
    </ul>
<Outlet/>
    </div>;
};

export default MovieDetails;
