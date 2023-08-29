import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/{time_window}';
const BASE_KEY = '2a66042f8789a7474bdd30506eef80e1';

export async function getMovies() {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${BASE_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}