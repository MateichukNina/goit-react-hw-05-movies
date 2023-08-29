import {useParams} from "react-router-dom"

const MovieDetails = () => {
  const {movieId} = useParams();
  console.log(movieId);

  return <div>MovieDetails: {movieId}</div>;
};

export default MovieDetails;
