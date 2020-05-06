/**
 * Manage movie data and get some personal methods
 * 
 * Some features are:
 *  - Get card movie poster html code
 *  - Make an average of all total ratings
 */

export default class Movie {
  constructor({
    title,
    year,
    genres,
    ratings,
    posterurl,
    originalTitle,
    storyline,
    actors,
    imdbRating
  }) {
    this.title = title;
    this.year = year;
    this.genres = genres;
    this.ratings = ratings;
    this.poster = posterurl;
    this.originalTitle = originalTitle;
    this.storyline = storyline;
    this.actors = actors;
    this.imdbRating = imdbRating;
  }

   /** 
   * Get average rate of viewers rating
   */
  averageRating() {
    const lenRatings = this.ratings.length;
    if (lenRatings <= 0) return 0;
    const sumRatings = this.ratings.reduce((prev, curr, idx, arr) => prev + curr);

    return (sumRatings / lenRatings).toFixed(2);
  }

   /** 
   * Make a html code list for show in front card view
   */
  actorsList() {
    let actorsHtmlList = ''
    for(let i = 0; i < this.actors.length; i++){
      let actor = this.actors[i];
      actorsHtmlList += `<li>${actor}</li>`
    }

    return actorsHtmlList;
  }

   /** 
   * Html card code to perfomrms a great view in fronent row poster
   */
  htmlMovieCard() {
    return `<div class="w-full flex p-4">
      <div
        class="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style="background-image: url('${this.poster}')"
        title="image poster of ${this.title} the movie"
      >
      </div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            Release date : ${this.year}
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            ${this.title}
          </div>
          <p class="text-gray-700 text-base">
            ${this.storyline}
          </p>
        </div>
        <div class="flex items-center">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
          <div class="text-sm mx-2">
            <p class="text-gray-900 leading-none">Viewers vote</p>
            <p class="text-gray-600">${this.averageRating()}</p>
          </div>
          <div class="text-sm">
            <p class="text-gray-900 leading-none">IMDB vote</p>
            <p class="text-gray-600">${this.imdbRating ? this.imdbRating : 'No data yet'}</p>
          </div>
        </div>
        <div class="flex mt-2 flex-col">
          <p class="text-gray-900 leading-none">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z" />
            </svg>
            Cast
          </p>
          <hr class="my-2" />
          <div class="text-sm mx-2">
            <ul class="list-disc">
              ${this.actorsList() ? this.actorsList() : 'No cast data available'}
            </ul>
          </div>
        </div>
      </div>
    </div>`;
  }
}
