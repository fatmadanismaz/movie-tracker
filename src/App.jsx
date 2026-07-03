import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import MovieForm from "./Components/MovieForm"; // Eksik olan import

function App() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold" style={{ color: "#5C4033" }}>
          Film Takip Uygulaması
        </h1>
        <p className="fs-5" style={{ color: "#6F4E37" }}>
          Favori filmlerini kolayca ekle, düzenle ve takip et.
        </p>
      </div>

      {/* Film Ekleme/Düzenleme Formu */}
      <MovieForm
        movies={movies}
        setMovies={setMovies}
        editingMovie={editingMovie}
        setEditingMovie={setEditingMovie}
      />

      {/* Filmleri listelemek için buraya MovieList'i de eklemek isteyebilirsin */}
      <MovieList
  movies={movies}
  setMovies={setMovies}
  onEdit={setEditingMovie}
/>
    </div>
  );
}

export default App;