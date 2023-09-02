import React, { useEffect, useState } from 'react';

import { getFilm } from 'components/api-movie';
import { FilmList } from 'components/FilmList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation()

  useEffect(() => {
    const loadFilm = async () => {
      try {
        const filmData = await getFilm();
        
        setFilms(filmData);
      } catch (error) {
        console.log(error);
      }
    };
    loadFilm();
  }, []);

  

  return (
    <div>

<h2>Trending for week</h2>
<FilmList films={films} state={{ from: location }}/>
      {/* {films ? (
        films.map(film => (
          <Link
            key={film.id}
            to={`/movies/${film.id}`}
            style={{ display: 'block', margin: '10px 10px' }}
          >
            {film.title}
          </Link>
        ))
      ) : (
        <p>No films available</p>
      )} */}
    </div>
  );
};

export default Home;