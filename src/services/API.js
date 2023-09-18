import axios from 'axios';

axios.defaults.baseURL = 'https://650739353a38daf4803f45ac.mockapi.io/';


export const getCars = async () => {
  try {
    const res = await axios.get('/adverts');
    return res.data;
  } catch (e) {
    return console.log(e.message);
  }
};




// export const getMovieDetails = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}?api_key=${BASE_KEY}`);
//   return data;
// };

// export const searchMovies = async query => {
//   const { data } = await axios.get(
//     `/search/movie?api_key=${BASE_KEY}&query=${query}`
//   );
//   return data.results;
// };

// export const getMovieCredits = async movieId => {
//   const { data } = await axios.get(
//     `/movie/${movieId}/credits?api_key=${BASE_KEY}`
//   );
//   return data.cast;
// };

// export const getMovieReviews = async movieId => {
//   const { data } = await axios.get(
//     `/movie/${movieId}/reviews?api_key=${BASE_KEY}`
//   );
//   return data.results;
// };
