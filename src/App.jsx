import { useState, useEffect } from "react";
import MovieForm from "./Components/MovieForm";
import MovieList from "./Components/MovieList";

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="app">

      <header className="hero">
        <div className="hero-overlay"></div>

        <div className="container">

          <h1 className="hero-title">
            🎬 Film Takip Uygulaması
          </h1>

          <p className="hero-subtitle">
            Favori filmlerini yönet, düzenle ve takip et.
          </p>

        </div>
      </header>

      <main className="container py-5">

        <MovieForm
          movies={movies}
          setMovies={setMovies}
          editingMovie={editingMovie}
          setEditingMovie={setEditingMovie}
        />

        <MovieList
          movies={movies}
          setMovies={setMovies}
          onEdit={setEditingMovie}
        />

      </main>

    </div>
  );
}

export default App;