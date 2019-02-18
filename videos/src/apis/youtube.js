import axios from 'axios';

const KEY = 'AIzaSyDAgzL0MiKE7ZpOumQpAllzv9yk4pV77r4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
