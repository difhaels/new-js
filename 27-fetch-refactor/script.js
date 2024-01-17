const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    const inputKey = document.querySelector('.input-keyword').value;
    const movies = await getMovies(inputKey);
    updateUI(movies)
});

// function untuk manmpilkan movies yang didapatkan dari omdbapi 
function updateUI(movies) {
    let cards = "";

    movies.forEach((movie) => {
        cards += showMovie(movie);
    });

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;  
}

// event binding untuk menampilkan detail
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getDetail(imdbid)
        updateUIDetail(movieDetail);
    }
})

// function untuk manmpilkan movie detail yang didapatkan dari omdbapi 
function updateUIDetail (movie){
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = showDetail(movie)
}

// function untuk mengabil movies dari omdbapi
function getMovies(movies){
        return fetch('http://www.omdbapi.com/?apikey=276ca99&s=' + movies)
        .then(response => response.json())
        .then(response => response.Search)
        .catch(e => console.error(e.message))
}

// function untuk mengabil detail movie dari omdbapi
function getDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=276ca99&i=' + imdbid)
    .then(response => response.json())
    .then(response => response)
    .catch(e => console.error(e.message))
}

// function untuk mampilkan movies yang didapatkan dari omdbapi 
function showMovie(movie) {
    return `<div class="col-md-3 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h5 class="card-subtittle text-muted mb-2">${movie.Year}</h5>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#showDetail" data-imdbid="${movie.imdbID}">Show Detail</a>
                    </div>
                </div>
            </div>`;
}

// function untuk mampilkan detail movie yang didapatkan dari omdbapi 
function showDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="${m.Title}">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}