import './App.css';
import {MovieSearch} from './components/MovieSearch';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Movie Search</h2>
      </header>
      <MovieSearch />
    </div>
  );
}

export default App;
