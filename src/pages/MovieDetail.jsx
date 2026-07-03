import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById, clearCurrentMovie } from '../store/movieSlice';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentMovie: movie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieById(id));
    return () => {
      dispatch(clearCurrentMovie());
    };
  }, [dispatch, id]);

  if (loading) return <div className="loading">Đang tải chi tiết phim...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return <div className="no-data">Không tìm thấy thông tin phim.</div>;

  return (
    <div className="movie-detail-container">
      <Link to="/" className="back-link">
        &larr; Quay lại danh sách
      </Link>
      
      <div className="movie-detail-card">
        <div className="movie-detail-image-sec">
          <img
            src={movie.imageUrl || 'https://via.placeholder.com/300'}
            alt={movie.title}
            className="movie-detail-image"
          />
        </div>
        <div className="movie-detail-info-sec">
          <h2 className="movie-detail-title">{movie.title}</h2>
          <div className="movie-detail-meta">
            <p className="movie-detail-genre"><strong>Thể loại:</strong> {movie.genre}</p>
            <p className="movie-detail-rating"><strong>Đánh giá:</strong> ⭐ {movie.rating}/10</p>
          </div>
          <p className="movie-detail-description"><strong>Mô tả:</strong> {movie.description}</p>

          <div className="movie-detail-actions">
            <Link to={`/movies/${movie.id}/edit`} className="btn btn-warning">
              Chỉnh Sửa
            </Link>
            <Link to="/" className="btn btn-secondary">
              Quay Lại
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
