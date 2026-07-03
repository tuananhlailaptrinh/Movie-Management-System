import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, deleteMovie } from '../store/movieSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const { list: movies, loading, error } = useSelector((state) => state.movies);

  // Fetch movies khi component mount
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa phim này không?')) {
      dispatch(deleteMovie(id))
        .unwrap()
        .then(() => {
          alert('Xóa phim thành công!');
        })
        .catch((err) => {
          console.error('Error deleting movie:', err);
          alert('Có lỗi xảy ra khi xóa phim.');
        });
    }
  };

  if (loading) return <div className="loading">Đang tải danh sách phim...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="movie-list-container">
      <div className="list-header">
        <h2>Danh Sách Quản Lý Phim</h2>
        <Link to="/add" className="btn btn-primary">
          + Thêm Phim Mới
        </Link>
      </div>

      {movies.length === 0 ? (
        <p className="no-data">Không có phim nào trong hệ thống.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-image-container">
                <img
                  src={movie.imageUrl || 'https://via.placeholder.com/150'}
                  alt={movie.title}
                  className="movie-image"
                />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <span className="movie-genre-badge">{movie.genre}</span>
                <p className="movie-desc">
                  {movie.description && movie.description.length > 100
                    ? `${movie.description.substring(0, 100)}...`
                    : movie.description}
                </p>
                <div className="movie-prices">
                  <span className="current-price">
                    {movie.currentPrice !== undefined ? `${Number(movie.currentPrice).toLocaleString('vi-VN')} đ` : 'Liên hệ'}
                  </span>
                  {movie.originalPrice !== undefined && movie.originalPrice !== movie.currentPrice && (
                    <span className="original-price">
                      {Number(movie.originalPrice).toLocaleString('vi-VN')} đ
                    </span>
                  )}
                </div>
                <div className="movie-meta">
                  <span className="movie-rating-badge">⭐ {movie.rating}/10</span>
                </div>
                <div className="movie-actions">
                  <Link to={`/movies/${movie.id}`} className="btn btn-info">
                    Chi tiết
                  </Link>
                  <Link to={`/movies/${movie.id}/edit`} className="btn btn-warning">
                    Sửa
                  </Link>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
