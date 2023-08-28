import { useParams } from "react-router-dom";

const MovieDetails = () => {
const {movieId} = useParams()

  return <>MovieDetails: {movieId}</>;
};

export default MovieDetails;
