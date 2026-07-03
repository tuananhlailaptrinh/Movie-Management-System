import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById, updateMovie, clearCurrentMovie } from '../store/movieSlice';
import MovieForm from '../components/MovieForm';

const MovieEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentMovie: movieData, loading, error: reduxError } = useSelector((state) => state.movies);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Fetch dữ liệu phim cũ về để pre-populate vào form
  useEffect(() => {
    dispatch(fetchMovieById(id));
    return () => {
      dispatch(clearCurrentMovie());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (reduxError) {
      setError(reduxError);
    }
  }, [reduxError]);

  // Gửi request PUT cập nhật phim và điều hướng quay lại trang chi tiết
  const handleEditSubmit = (payload) => {
    setSubmitting(true);
    setError('');

    dispatch(updateMovie({ id, data: payload }))
      .unwrap()
      .then(() => {
        alert('Cập nhật thông tin phim thành công!');
        navigate(`/movies/${id}`); // Quay lại trang MovieDetail của phim vừa sửa
      })
      .catch((err) => {
        console.error('Error updating movie:', err);
        setError(err || 'Đã xảy ra lỗi khi cập nhật thông tin phim.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  if (loading) return <div className="loading">Đang tải thông tin phim...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="movie-form-container">
      <Link to={`/movies/${id}`} className="back-link">
        &larr; Quay lại trang chi tiết
      </Link>
      <h2>Chỉnh Sửa Phim</h2>

      {error && <div className="error-box">{error}</div>}

      {movieData && (
        <MovieForm
          initialData={movieData}
          onSubmit={handleEditSubmit}
          buttonText="Lưu thay đổi"
          isSubmitting={submitting}
        />
      )}
    </div>
  );
};

export default MovieEdit;
