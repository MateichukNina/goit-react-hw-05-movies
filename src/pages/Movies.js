// import React, { useEffect, useState } from 'react';
// import { getSearchMovie } from 'components/api-movie';

// import { useSearchParams, useLocation } from 'react-router-dom';
// // import { getSearchMovie } from 'components/api-movie';
// // import { toast } from 'react-hot-toast';
// // import { Outlet } from 'react-router-dom';

// // const Movies = () => {
// //   // const [query, setQuery] = useState('');
// //   // const [films, setFilms] = useState([]);

// //   // useEffect(() => {
// //   //   const loadFilm = async () => {
// //   //     try {
// //   //       const filmData = await getSearchMovie(query);
// //   //       console.log(films);
// //   //       setFilms(filmData.results);
// //   //     } catch (error) {
// //   //       console.log(error);
// //   //     }
// //   //   };
// //   //   loadFilm();
// //   // }, [query, films]);

// //   // const handleInputChange = event => {
// //   //   setQuery(event.target.value);
// //   //   event.target.reset();
// //   // };

// //   // const handleSearch = event => {
// //   //   event.preventDefault();
// //   //   if (!query) {
// //   //     toast.error('Please enter a valid movie title');
// //   //     return;
// //   //   }
// //   //   setQuery(event.target.elements.query.value);
// //   //   event.target.reset();
// //   // };

// //   return (
// //     <div>
// //       <form onSubmit={handleSearch}>
// //         <input
// //           className="input"
// //           name="query"
// //           type="text"
// //           value={query}
// //           onChange={handleInputChange}
// //         />
// //         <button type="submit">Search</button>
// //         <ul>
// //         {films && films.length > 0 ? (
// //     films.map((film) => (
// //       <li key={film.id}>{film.title}</li>
// //     ))
// //   ) : (
// //     <p>No films available</p>
// //   )}
// //         </ul>
// //       </form>
// //      <Outlet/>
// //     </div>
// //   );
// // };

//  const Movies = () =>{
//   const [query, setQuery] = useState('');
//   const [findQuery, setFindQuery] = useState([])
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const queryInput = searchMovies.get('movieId');
//   const location = useLocation();

//   const queryInput = searchParams.get('searchQuery') ?? '';

// useEffect(() => {
//   const loadFilm = async () => {
//     try {
//        const filmData = await getSearchMovie(query);

//       setFindQuery(filmData);
//      } catch (error) {
//       console.log(error);
//      }}
//    loadFilm();
//  }, [query,]);

// const onSubmit = evt => {
//     evt.preventDefault();

//     setQuery(queryInput);
//   };

//   const updateQueryString = evt => {
//     const searchValue = evt.target.value;

//     const searchParam = searchValue !== '' ? { searchQuery: searchValue } : {};
//     setSearchParams(searchParam);
//   };

//   return(
//     <div>
//     <form onSubmit={onSubmit}>
//       <input type="text" value={queryInput} onChange={updateQueryString} />
//       <button type="submit">Search film</button>
//     </form>
//     {/* <MovieList items={queryResult} stateItem={{ from: location }} /> */}
//   </div>
//   )
//   }

//  export default Movies;

import React, { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/api-movie';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [queryInput, setQueryInput] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const loadFilm = async () => {
      try {
        const filmData = await getSearchMovie(queryInput);
        console.log(filmData)
        setFilms(filmData.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadFilm();
  }, [queryInput]);

  const onSubmit = evt => {
    evt.preventDefault();
    setQueryInput(searchParams.get('searchQuery') ?? '');
  };

  const updateQuery = evt => {
    const searchValue = evt.target.value;
    setSearchParams({ searchQuery: searchValue });
    setQueryInput(searchValue);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={queryInput} onChange={updateQuery} />
        <button type="submit">Search film</button>
      </form>
      <ul>
  {films && films.length > 0 ? (
    films.map(film => (
      <li key={film.id}>
        {film.title} 
      </li>
    ))
  ) : (
    <p>No films available</p>
  )}
</ul>
    </div>
  );
};

export default Movies;