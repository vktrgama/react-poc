import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../loader'

/** MOVIES gql query to retreive upcominfMoves  */
//TODO: move to a separate file for gql queries
export const MOVIES = gql`
  query getUpcomingMovies {
    upcomingMovies {
      id
      original_title
      overview
      vote_average
      poster_path
    }
  }
`;

function Projects(props) {
  const { loading, error, data } = useQuery(MOVIES);

  return (
  <Loader error={error} loading={loading} data={data}>
      {data?.upcomingMovies?.map((movie, index) => (
          <p>{movie.original_title}</p>
        ))}
  </Loader>
  )
}

export default Projects;