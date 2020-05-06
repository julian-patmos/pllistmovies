import MovieService from "./services/movies";
import MoviePlaylist from "./components/playlist"

function initMovieFlix(data) {
    let playlist = new MoviePlaylist(data);

    const container = document.getElementById('postersContainer');
    const sortSelect = document.getElementById('sort-method')
    const pivotSelect = document.getElementById('sort-pivot')

    container.innerHTML = playlist.getPlayListCode()

    sortSelect.onchange = () => {
        let valueSelected = sortSelect.value;
        let pivotHtmlText = playlist.getOptions(valueSelected);
        
        pivotSelect.innerHTML = pivotHtmlText;
    }

    pivotSelect.onchange = () => {
        let sortSelected = sortSelect.value;
        let pivotSelected = pivotSelect.value;
        playlist.orderBy(sortSelected, pivotSelected);
        container.innerHTML = playlist.getPlayListCode()
    }
};


MovieService
    .getMovies()
    .then(({ data }) => initMovieFlix(data));
