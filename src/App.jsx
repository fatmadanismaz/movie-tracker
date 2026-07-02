import { useState } from "react";
import MovieForm from "./Components/MovieForm";
import MovieList from "./Components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        🎬 Film Takip Uygulaması
      </h1>

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

    </div>
  );
}

export default App;