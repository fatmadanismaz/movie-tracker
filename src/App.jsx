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
    <div>
      {/* Hero Alanı */}
      <div className="hero mb-5">
        <h1 className="hero-title">🍿 Film Takip Uygulaması</h1>
        <p className="hero-subtitle">
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

      {/* Filmleri listelemek için MovieList */}
      <MovieList
        movies={movies}
        setMovies={setMovies}
        onEdit={setEditingMovie}
      />
    </div>
  );
}

export default App;