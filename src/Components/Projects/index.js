import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../Common/Loader/loader'
import Slider from '../NetflixSlider'
import { NavLink } from 'react-router-dom';

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
  const linkNotes = <NavLink style={{
    color: "blue"
  }} to="/notes">Notes</NavLink>;

  return (
    <div class="container well">
        <div class="row">
            <div class="grid_12">
                <h2 class="wow fadeInLeft">Personal Sandbox</h2>
                <p>&nbsp;</p>
            </div>
        </div>
        <div class="row">
          <div class="grid_12">
              <div class="row">
                <h2 style={{fontSize: 30}} class="wow fadeInLeft">Movie Slider implemented with graphQL</h2>
                <Loader error={error} loading={loading} data={data}>
                  <Slider>
                      {data?.upcomingMovies?.map((movie, index) => (
                        <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                      ))}
                  </Slider>
                </Loader>
              </div>
              <p>&nbsp;</p>
              <div class="row">
                <h2 style={{fontSize: 30}} class="wow fadeInLeft">Implement AWS authentication and graphQL CRUD</h2>
                <h1 style={{textAlign:"center"}}>{linkNotes} app</h1>
                <span style={{visibility:'hidden'}}>(mike-2test@pp)</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects;