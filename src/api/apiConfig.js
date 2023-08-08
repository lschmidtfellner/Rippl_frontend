import axios from 'axios'

//Create Axios connection to our Heroku deployed API
const api = axios.create({
  baseURL: 'https://spotify-rec-backend.herokuapp.com'
});

export default api;