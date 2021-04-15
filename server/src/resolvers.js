const resolvers = {
    Query: {
        // returns an array of upcoming movies
        upcomingMovies: (_, __, {dataSources}) => {
            return dataSources.movieAPI.getUpcomingMovies();
        }
    }
};

module.exports = resolvers;
