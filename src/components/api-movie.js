import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';

const BASE_KEY = '2a66042f8789a7474bdd30506eef80e1';



export async function getFilm() {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${BASE_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
 export async function getMovieDetails(movieId){
  try {
    const DETAIL_URL = `https://api.themoviedb.org/3/movie/${movieId}`;
    const response = await axios.get(`${DETAIL_URL}?api_key=${BASE_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
 }

 export async function getSearchMovie(query){
  try {
    const SEARCH_URL ='https://api.themoviedb.org/3/search/movie';
    const response = await axios.get(`${SEARCH_URL}?api_key=${BASE_KEY}&query=${query}`);
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
 }