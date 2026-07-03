import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import AddMovie from './pages/AddMovie';
import MovieEdit from './pages/MovieEdit';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">🎬 MovieMS</Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/movies/:id/edit" element={<MovieEdit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Movie Management System. Build with React & json-server.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
