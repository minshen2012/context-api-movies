import { MovieContext } from './MovieContext';
import { useContext } from 'react';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Mason</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
