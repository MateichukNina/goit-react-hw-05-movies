

import React, { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/api-movie';
import { useSearchParams, useLocation } from 'react-router-dom';

import { FilmList } from 'components/FilmList';
import styled from 'styled-components';

const PaginationBtn = styled.button`
background: #b38df9;
border-radius: 4px;
color: #fff;
border: none;
`
const PaginationContainer = styled.div`
margin-top: 30px
`

const Movies = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [queryInput, setQueryInput] = useState(
    searchParams.get('searchQuery') ?? ''
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const inputResult = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    const result = async () => {
      if (!queryInput) {
        setQueryInput([]);
        return;
      }

      try {
        const result = await getSearchMovie(queryInput, currentPage);
        console.log("API Response:", result.total_pages);
        setFilms(result.results);
        setTotalPages(result.total_pages);
        
      } catch (error) {
        console.log(error);
      }
      
    };

    result();
  }, [queryInput, inputResult, currentPage]);

  const handlePageChange = newPage => {
   
    setCurrentPage(newPage);
  };

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

      {totalPages > 1 && ( 
      <PaginationContainer>
        <PaginationBtn
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Back
        </PaginationBtn>
        <span>Page {currentPage} из {totalPages}</span>
        <PaginationBtn
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationBtn>
      </PaginationContainer>
    )}

      {/* <PaginationContainer>
        <PaginationBtn
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Back
        </PaginationBtn>
        <span>Page {currentPage} из {totalPages}</span>
        <PaginationBtn
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationBtn>
      </PaginationContainer> */}

      <FilmList films={films} state={{ from: location }} />

      
    </div>
  );
};

export default Movies;
