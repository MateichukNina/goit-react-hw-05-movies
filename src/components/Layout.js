import { Outlet} from 'react-router-dom';
import { Container, NavList, NavHeader, NavLinkItem } from './Layout.styled';


export const Layout = () => {
  return (
    <Container>
      {' '}
      <NavHeader>
        <NavList>
          <li>
            <NavLinkItem to="/">Home</NavLinkItem >
          </li>
          <li>
            {' '}
            <NavLinkItem  to="/movies">Movies</NavLinkItem >
          </li>
        </NavList>
      </NavHeader>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
