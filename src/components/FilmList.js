import { Link } from "react-router-dom";
import { List, Item } from "./FilmList.styled";

export const FilmList = ({ films, state }) => {
  return (
    <>
      <List>
        {films && films.length > 0 ? (
          films.map(film => (
            <Item key={film.id}>
              <Link to={`/movies/${film.id}`} state={state}>
                {film.original_title}
              </Link>
            </Item>
          ))
        ) : (
          <p>No films available</p>
        )}
      </List>
    </>
  );
};