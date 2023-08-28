import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () =>{
useEffect(() => {
  // HTTP find Films
},[])

return (
  <div>
    {['film-1', 'film-2', 'film-3'].map(film => {
      return <Link key={film} to={`${film}`}>{film}</Link>; 
    })}
  </div>
);
};



export default Home;