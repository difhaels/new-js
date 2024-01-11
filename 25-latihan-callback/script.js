$('.search-button').on('click', function(){
    
    $.ajax({
        url:'http://www.omdbapi.com/?apikey=276ca99&s=' + $('.input-keyword').val(),
        success: result => {
            const movies = result.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showMovie(m);
            });
            $('.movie-container').html(cards);
    
            // ketika tombol diklik
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url : 'http://www.omdbapi.com/?apikey=276ca99&i=' + $(this).data('imdbid'),
                    success : m => {
                        const movieDetail = showDetail(m); 
                        $('.modal-body').html(movieDetail);
                    },
                    error : e => console.log(e.responseText)
                })
            });
        },
        error: e => console.log(e.responseText)
    })
})



function showMovie(m) {
    return `<div class="col-md-3 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h5 class="card-subtittle text-muted mb-2">${m.Year}</h5>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#showDetail" data-imdbid="${m.imdbID}">Show Detail</a>
                    </div>
                </div>
            </div>`;
}
function showDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="${m.Title}">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>Judul</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
    