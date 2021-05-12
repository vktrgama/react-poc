import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../Common/Loader/loader'
import Slider from '../NetflixSlider'

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

function NewMovies () {
    const { loading, error, data } = useQuery(MOVIES);

    return (
        <>
            <h2 style={{fontSize: 30}} class="wow fadeInLeft">Movie Slider implemented with graphQL</h2>
            <Loader error={error} loading={loading} data={data}>
            <Slider>
                {data?.upcomingMovies?.map((movie, index) => (
                    <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                ))}
            </Slider>
            </Loader>
        </>
    )
}

export default NewMovies;