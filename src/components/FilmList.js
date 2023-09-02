import { Link } from "react-router-dom";

export const FilmList = ({ films }) => {
  return (
    <>
      <ul>
        {films && films.length > 0 ? (
          films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} >
                {film.original_title}
              </Link>
            </li>
          ))
        ) : (
          <p>No films available</p>
        )}
      </ul>
    </>
  );
};