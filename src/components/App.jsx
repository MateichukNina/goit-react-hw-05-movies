import { NavLink, Route, Routes } from "react-router-dom";
import Home from 'pages/Home';
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <ul><li><NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/movies'>Movies</NavLink></li></ul>
        
      </nav>

      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/movies' element={<Movies/>}></Route>
    <Route path='/movies/:movieId' element={<MovieDetails/>}>
      {/* <Route path='cast' element={<div>Cast</div>}>Cast</Route>
      <Route path="reviews" element={<div>Reviews</div>}>Reviews</Route> */}
    </Route>
    
   

      </Routes>
    </div>
  );
};
