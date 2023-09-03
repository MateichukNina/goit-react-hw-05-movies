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


// pizdets

// import React, { useEffect, useState } from 'react';
// import { getSearchMovie } from 'components/api-movie';
// import { useSearchParams } from 'react-router-dom';


// import { FilmList } from 'components/FilmList';

// const Movies = () => {
//   const [queryInput, setQueryInput] = useState('');
//   const [films, setFilms] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
 

//   const inputResult = searchParams.get('searchQuery') ?? '';

//   useEffect(() => {
//     const loadFilm = async () => {
//       try {
//         const filmData = await getSearchMovie(queryInput);
//         console.log(filmData); 
//         setFilms(filmData.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     loadFilm();
//   }, [queryInput]);
   


//     const updateQuery = evt => {
//       const searchValue = evt.target.value;
//        setSearchParams({ searchQuery: searchValue });
//       // setQueryInput(searchValue);
//       const searchParam = searchValue !== '' ? { searchQuery: searchValue } : {};
//       setSearchParams(searchParam);
//     };

  
//    const onSubmit =  evt => {
//      evt.preventDefault();
     
//      setQueryInput(inputResult);
//     }
  

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text"
//          value={queryInput} 
//          onChange={updateQuery} />
//         <button type="submit">Search film</button>
//       </form>
      
//       <FilmList films={films}/>
//     </div>
//   );
// };

// export default Movies;

import React, { useEffect, useState } from 'react';
 import { getSearchMovie } from 'components/api-movie';
import { useSearchParams, useLocation } from 'react-router-dom';


import { FilmList } from 'components/FilmList';

const Movies = () => {
  const [queryInput, setQueryInput] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const inputResult = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    setQueryInput(inputResult);
    const result = async () => {
      

      try {
        const result = await getSearchMovie(queryInput);
        setFilms(result);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, [queryInput, inputResult]);

 

  const updateQuery = evt => {
    const searchValue = evt.target.value;

    const searchParam = searchValue !== '' ? { searchQuery: searchValue } : {};
    setSearchParams(searchParam);
  };

  const onSubmit = evt => {
    evt.preventDefault();

    setQueryInput(inputResult);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputResult} onChange={updateQuery} />
        <button type="submit">Search</button>
      </form>
      <FilmList films={films} state={{ from: location }} />
    </div>
  );
};

export default Movies;