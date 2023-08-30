import { useEffect, useState } from 'react';

import React from 'react';
import { getSearchMovie } from 'components/api-movie';
import { toast } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const loadFilm = async () => {
      try {
        const filmData = await getSearchMovie(query);
        console.log(films);
        setFilms(filmData.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadFilm();
  }, [query, films]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    if (!query) {
      toast.error('Please enter a valid movie title');
      return;
    }
    setQuery(event.target.elements.query.value);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="input"
          name="query"
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
        <ul>
        {films && films.length > 0 ? (
    films.map((film) => (
      <li key={film.id}>{film.title}</li>
    ))
  ) : (
    <p>No films available</p>
  )}
        </ul>
      </form>
     <Outlet/>
    </div>
  );
};

export default Movies;
