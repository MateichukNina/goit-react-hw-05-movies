import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Layout } from './Layout';
import { Cast } from './Cast';
import { Review } from './Review';

export const App = () => {
  return (
  

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path=":movieId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='review' element={<Review/>}/>
        </Route>
        <Route path="movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='review' element={<Review/>}/>
        </Route>
        </Route>
        
      </Routes>
      
  );
};
