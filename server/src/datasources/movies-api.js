const { RESTDataSource } = require('apollo-datasource-rest');

//TODO: move to config file
const API_KEY = "4bd38043a0c71eafacb725aad015d9b6";

class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.themoviedb.org/3/';
      }

    getUpcomingMovies() {
        return this.get(`movie/upcoming?page=1&api_key=${API_KEY}`)
        .then((data) => {
            return data.results;
        });
    }
}

module.exports = MovieAPI;
