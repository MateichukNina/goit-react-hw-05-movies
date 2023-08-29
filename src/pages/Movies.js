import { useEffect } from 'react';
import React from 'react';
// import MovieDetails from './MovieDetails';

const Movies = () => {
  // const [films, setFilms] = useState([]);
  useEffect(() => {
    // Find for input
  }, []);

  
  return (
    <div>
      <form >
        <input className="input"
          name="query"
          type="text" />
        <button type="submit">Search</button>
      </form>
      {/* <MovieDetails/> */}
    </div>
  );
};

export default Movies;
