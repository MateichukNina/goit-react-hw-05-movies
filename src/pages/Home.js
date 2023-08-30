import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilm } from 'components/api-movie';

const Home = () => {
  const [films, setFilms] = useState([]);

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
      {films ? (
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
      )}
    </div>
  );
};

export default Home;
