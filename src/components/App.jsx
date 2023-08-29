import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Layout } from './Layout';

export const App = () => {
  return (
  

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />} onClick="onSubmit"></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        </Route>
        
      </Routes>
      
  );
};
