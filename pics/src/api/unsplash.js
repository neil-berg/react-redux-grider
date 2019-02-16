import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID cbbe59bb5cb60e25be046ed6a882dedbe58a7703d487d62dddd735287732156d'
  }
});
