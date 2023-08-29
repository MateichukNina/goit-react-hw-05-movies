import { useEffect } from "react";
import { Link } from "react-router-dom";
// import MovieDetails from "./MovieDetails";

const Home = () =>{


useEffect(() => {
  // HTTP find Films
},[])

return (
  <div>
    {['film-1', 'film-2', 'film-3', 'film-4'].map(film => {
      return <Link key={film} to={`${film}`}>{film}</Link>; 
    })}
    {/* <MovieDetails/> */}
  </div>
);
};



export default Home;