import { useState, useEffect } from "react";

function MovieForm({
  movies,
  setMovies,
  editingMovie,
  setEditingMovie,
}) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setYear(editingMovie.year);
      setGenre(editingMovie.genre);
      setRating(editingMovie.rating);
    }
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !year || !genre || !rating) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    if (editingMovie) {
      const updatedMovies = movies.map((movie) =>
        movie.id === editingMovie.id
          ? { ...movie, title, year, genre, rating }
          : movie
      );

      setMovies(updatedMovies);
      setEditingMovie(null);
    } else {
      const newMovie = {
        id: Date.now(),
        title,
        year,
        genre,
        rating,
      };

      setMovies([...movies, newMovie]);
    }

    setTitle("");
    setYear("");
    setGenre("");
    setRating("");
  };

  return (
    <section className="movie-form-card">

      <h2>➕ Yeni Film</h2>
      <p className="form-text">
        Koleksiyonuna yeni bir film ekle.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div>
            <label>Film Adı</label>

            <input
              type="text"
              className="form-control"
              placeholder="Örn: Interstellar"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label>Çıkış Yılı</label>

            <input
              type="number"
              className="form-control"
              placeholder="2014"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div>
            <label>Tür</label>

            <input
              type="text"
              className="form-control"
              placeholder="Bilim Kurgu"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>

          <div>
            <label>IMDb Puanı</label>

            <input
              type="number"
              className="form-control"
              placeholder="9.5"
              min="0"
              max="10"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

        </div>

        <button className="save-btn">
          {editingMovie ? "💾 Güncelle" : "🎬 Filmi Kaydet"}
        </button>

      </form>

    </section>
  );
}

export default MovieForm;