import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie } from '../store/movieSlice';
import MovieForm from '../components/MovieForm';

const AddMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleAddSubmit = (payload) => {
    setSubmitting(true);
    setError('');

    dispatch(addMovie(payload))
      .unwrap()
      .then(() => {
        alert('Thêm phim mới thành công!');
        navigate('/');
      })
      .catch((err) => {
        console.error('Error creating movie:', err);
        setError(err || 'Đã xảy ra lỗi khi lưu phim mới.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="movie-form-container">
      <Link to="/" className="back-link">
        &larr; Quay lại danh sách
      </Link>
      <h2>Thêm Phim Mới</h2>

      {error && <div className="error-box">{error}</div>}

      <MovieForm onSubmit={handleAddSubmit} buttonText="Thêm phim" isSubmitting={submitting} />
    </div>
  );
};

export default AddMovie;

