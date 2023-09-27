import React from 'react';

function Movies() {
  const moviesData = [
    {
      id: 1,
      name: "The Shawshank Redemption",
      rating: 9.3,
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 2,
      name: "The Godfather",
      rating: 9.2,
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 3,
      name: "Pulp Fiction",
      rating: 8.9,
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    {
      id: 4,
      name: "Inception",
      rating: 8.8,
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    },
    {
      id: 5,
      name: "The Dark Knight",
      rating: 9.0,
      description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
  ];

  const movieElements = moviesData.map((movie) => (
    <div key={movie.id}>
      <h1>{movie.name}</h1>
      <p>Rating: {movie.rating}</p>
      <p>Description: {movie.description}</p>
    </div>
  ));
  return <div>{movieElements}</div>;
}
export default Movies;