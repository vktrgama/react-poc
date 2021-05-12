import React from 'react';
import NewMovies from './NewMovies';
import GraphQlNotes from "./GraphQlNotes";

function Projects(props) {

  return (
    <div class="container well">
        <div class="row">
            <div class="grid_12">
                <h2 class="wow fadeInLeft">Sandbox</h2>
                <p>&nbsp;</p>
            </div>
        </div>
        <div class="row">
          <div class="grid_12">
              <div class="row">
                <NewMovies />
              </div>
              <p>&nbsp;</p>
              <div class="row">
                <GraphQlNotes />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects;