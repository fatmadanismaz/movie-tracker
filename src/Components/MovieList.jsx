function MovieList({ movies, setMovies, onEdit }) {
  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <section className="movie-section">

      <div className="section-header">
        <h2>🎞️ Film Koleksiyonum</h2>
        <span>{movies.length} Film</span>
      </div>

      {movies.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎬</div>
          <h3>Henüz film eklenmedi</h3>
          <p>İlk filmini ekleyerek koleksiyonunu oluşturmaya başla.</p>
        </div>
      ) : (
        <div className="movie-grid">

          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>


              <div className="movie-content full-width">

                <div className="movie-top">

                  <h3>{movie.title}</h3>

                  <span className="rating">
                    ⭐ {movie.rating}
                  </span>

                </div>

                <div className="movie-info">

                  <p>
                    <strong>Tür</strong>
                    <span>{movie.genre}</span>
                  </p>

                  <p>
                    <strong>Yıl</strong>
                    <span>{movie.year}</span>
                  </p>

                </div>

                <div className="movie-buttons">

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(movie)}
                  >
                    ✏️ Düzenle
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    🗑️ Sil
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default MovieList;