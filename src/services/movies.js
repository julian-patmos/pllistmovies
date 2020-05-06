import { HTTP } from './base';

export default {
  getMovies: () => HTTP.get('movies/')
};
