import { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 123 },
    { name: 'Game of Thrones', price: '$10', id: 234 },
    { name: 'Inception', price: '$10', id: 345 },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
