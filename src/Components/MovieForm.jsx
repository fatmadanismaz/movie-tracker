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
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Film adı"
      />

      <input
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Yıl"
      />

      <input
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Tür"
      />

      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Puan"
        min="0"
        max="10"
      />

      <button type="submit">
        {editingMovie ? "Güncelle" : "Ekle"}
      </button>
    </form>
  );
}

export default MovieForm;