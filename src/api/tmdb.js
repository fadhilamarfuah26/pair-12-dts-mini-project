import axios from 'axios';

const API_KEY = 'c891d9580b3562e1f48234eef1a79b56';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;