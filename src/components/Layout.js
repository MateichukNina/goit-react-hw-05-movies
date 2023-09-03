import { Outlet, NavLink } from 'react-router-dom';
import { Container, NavList, NavHeader } from './Layout.styled';


export const Layout = () => {
  return (
    <Container>
      {' '}
      <NavHeader>
        <NavList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </NavList>
      </NavHeader>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
