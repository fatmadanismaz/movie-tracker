function MovieList({ movies, setMovies, onEdit }) {
  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <div className="mt-5">
      <h3 className="text-center mb-4">🎬 Film Listesi</h3>

      {movies.length === 0 ? (
        <div className="alert alert-info text-center">
          Henüz film eklenmedi.
        </div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="card shadow mb-3 border-0">
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h4 className="fw-bold text-primary mb-3">
                  🎬 {movie.title}
                </h4>

                <p className="mb-2">
                  <strong>📅 Yıl:</strong> {movie.year}
                </p>

                <p className="mb-2">
                  <strong>🎭 Tür:</strong>
                  <span className="badge bg-secondary ms-2">
                    {movie.genre}
                  </span>
                </p>

                <p className="mb-0">
                  <strong>⭐ Puan:</strong>
                  <span className="badge bg-warning text-dark ms-2">
                    {movie.rating}/10
                  </span>
                </p>
              </div>

              <div>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => onEdit(movie)}
                >
                  ✏️ Düzenle
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteMovie(movie.id)}
                >
                  🗑️ Sil
                </button>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;