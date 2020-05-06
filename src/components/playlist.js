import Movie from './movie'

export default class MoviePlaylist {
    /**
     * This class manage all movie classes and make the sorts 
     * 
     * Some features are:
     *  - Get list html code
     *  - Sort movies by user selection
     *  - Save arrays like genres and actors
     * 
     * @param {!Array<Movie>} mylist List of movies classes with initial data.
     * @param {!Array<Movie>} mySortedList List of movies classes after apply some sort methods.
     * @param {!Array<String>} genres A list of genres from movies classes initialitation for some utilities.
     * @param {!Array<String>} actors A list of actors from movies classes initialitation for some utilities.
     */
    constructor(movies) {
        this.mylist = []
        this.mySortedList = []
        this.prev = null
        this.next = null

        this.genres = []
        this.actors = []


        /**
         * Load the inital data from request method.
         * @param {!Array<Objects>} movies json data get from server side
         */
        this.initialLoad(movies)
    }

    /** 
     * Load new Movies objects in local class
     * @param {!Array<Objects>} movies
     */
    initialLoad(movies) {
        for(let i = 0; i < movies.length; i++){
            let movieData = movies[i];
            let movie = new Movie(movieData);
            this.mylist.push(movie);

            
            movieData.genres.forEach(genre => {
                if(!this.genres.includes(genre)) {
                    this.genres.push(genre)
                }
            })

            movieData.actors.forEach(actor => {
                if(!this.actors.includes(actor)) {
                    this.actors.push(actor)
                }
            })
        }

        this.mySortedList = this.mylist
    }

    /** 
     * Sort myList and re-asing in mySortedList for keep a initial state of data
     * @param {!String[choices]} method 
     *  @choices [ 'rate', 'actor', 'genre']
     *  @description Sort selection by movie methods
     * @param {!String} pivot type of sort, depends of method selection
     */
    orderBy(method, pivot){
        if(method == 'rate') {
            console.log("rate")
            this.mySortedList = this.mylist.sort((a_movie, b_movie) => a_movie.averageRating() - b_movie.averageRating())
            if(pivot == 'high') this.mySortedList.reverse()
        } else if(method == 'actor') {
            console.log("actor")
            this.mySortedList = this.mylist.filter(movie => movie.actors.includes(pivot))
        } else if(method == 'genre') {
            console.log("genre")
            this.mySortedList = this.mylist.filter(movie => movie.genres.includes(pivot))
        }
    }

    /** 
     * Make a complete list of card append one by one the html code inside htmlMovieCard Movie class method
     */
    getPlayListCode() {
        let htmlList = ''

        for(let i = 0; i < this.mySortedList.length; i++){
            let movieObj = this.mySortedList[i];
            htmlList += movieObj.htmlMovieCard()
        }

        return htmlList
    }

    /** 
     * Depends of select sort, make a html code for 'pivot by' selection
     * @param {!String[choices]} bySort 
     *  @choices [ 'rate', 'actor', 'genre']
     *  @description Sort selection by movie methods
     */
    getOptions(bySort) {
        let options = '<option></option>'

        if(bySort == "rate") {
            options += '<option value="low">Low</option><option value="high">High</option>'
        } else if(bySort == "actor") {
            for(let i = 0; i < this.actors.length; i++){
                let actor = this.actors[i];
                options += `<option value="${actor}" >${actor}</option>`
            }
        } else if(bySort == "genre") {
            for(let i = 0; i < this.genres.length; i++){
                let genre = this.genres[i];
                options += `<option value="${genre}" >${genre}</option>`
            }
        } else {
            options = '<option>No data sort available for this option</option>'
        }     
    
        return options;
      }
}