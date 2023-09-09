import { getMovieDetails } from "components/api-movie";
import { useEffect, useState, useRef} from "react";
import {useParams, Link, Outlet, useLocation} from "react-router-dom"
import { DetailsTitle, DetailsContainer, Overview, Genres } from "components/MovieDetails.styled";


const MovieDetails = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  

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
      <Link to={backLinkLocation.current}>Back to page</Link>
      <DetailsTitle>{movieDetails.title}</DetailsTitle>
      
    <DetailsContainer>
    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
    <Overview>
    <p>{movieDetails.overview}</p>
    <Genres>Genres: {movieDetails.genres.map(genre => genre.name).join(", ")}</Genres>

    
    <ul>
      <li>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/review`}>Rewiew</Link>
      </li>
    </ul>
    </Overview>
   
    </DetailsContainer>
    
      
     
<Outlet/>
    </div>
  );
    

};

export default MovieDetails;
