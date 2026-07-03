import { useState, useEffect } from "react";

function MovieForm({ movies, setMovies, editingMovie, setEditingMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setYear(editingMovie.year);
      setRating(editingMovie.rating);
      setGenre(editingMovie.genre);
    } 
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !year || !genre || !rating) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    if (rating < 0 || rating > 10) {
      alert("Puan 0 ile 10 arasında olmalıdır.");
      return;
    }

    if (editingMovie) {
      // Güncelleme İşlemi
      const updated = movies.map((movie) =>
        movie.id === editingMovie.id
          ? { ...movie, title, year, rating, genre }
          : movie
      );
      setMovies(updated);
      setEditingMovie(null);
    } else {
      // Yeni Ekleme İşlemi
      const newMovie = {
        id: Date.now(),
        title,
        year,
        rating,
        genre
      };
      setMovies([...movies, newMovie]);
    }

    // Formu temizle
    setTitle("");
    setYear("");
    setGenre("");
    setRating("");
  };

  return (
   <form onSubmit={handleSubmit} className="card shadow p-4 mb-4 border-0">

  <h3 className="text-center mb-4">🎬 Film Bilgileri</h3>

  <div className="row">

    <div className="col-md-6 mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="🎬 Film Adı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    <div className="col-md-6 mb-3">
      <input
        className="form-control"
        type="number"
        placeholder="📅 Yıl"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    </div>

    <div className="col-md-6 mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="🎭 Tür"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
    </div>

    <div className="col-md-6 mb-3">
      <input
        className="form-control"
        type="number"
        placeholder="⭐ Puan (0-10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="10"
      />
    </div>

  </div>

  <button className="btn btn-primary w-100 mt-2" type="submit">
    {editingMovie ? "✏️ Güncelle" : "➕ Film Ekle"}
  </button>

</form>
  );
}

export default MovieForm;