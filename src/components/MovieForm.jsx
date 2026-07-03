import React, { useState } from 'react';

const MovieForm = ({ initialData, onSubmit, buttonText = 'Lưu Phim', isSubmitting = false }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    genre: initialData?.genre || '',
    rating: initialData?.rating !== undefined ? String(initialData?.rating) : '',
    description: initialData?.description || '',
    imageUrl: initialData?.imageUrl || '',
    originalPrice: initialData?.originalPrice !== undefined ? String(initialData?.originalPrice) : '',
    currentPrice: initialData?.currentPrice !== undefined ? String(initialData?.currentPrice) : '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Xóa lỗi của trường tương ứng khi người dùng nhập tiếp
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Tên phim không được để trống.';
    }

    if (!formData.genre.trim()) {
      newErrors.genre = 'Thể loại phim không được để trống.';
    }

    const ratingVal = Number(formData.rating);
    if (formData.rating === '' || isNaN(ratingVal) || ratingVal < 1 || ratingVal > 10) {
      newErrors.rating = 'Đánh giá phải là một số nằm trong khoảng từ 1 đến 10.';
    }

    const origPriceVal = Number(formData.originalPrice);
    if (formData.originalPrice === '' || isNaN(origPriceVal) || origPriceVal < 0) {
      newErrors.originalPrice = 'Giá vé gốc phải là số không âm.';
    }

    const currPriceVal = Number(formData.currentPrice);
    if (formData.currentPrice === '' || isNaN(currPriceVal) || currPriceVal < 0) {
      newErrors.currentPrice = 'Giá vé hiện tại phải là số không âm.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Chuẩn bị dữ liệu gửi đi (rating, prices chuyển thành số)
    const payload = {
      ...formData,
      rating: Number(formData.rating),
      originalPrice: Number(formData.originalPrice),
      currentPrice: Number(formData.currentPrice),
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <div className="form-group">
        <label htmlFor="title">Tên phim *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Nhập tên phim"
          className={errors.title ? 'input-error' : ''}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="genre">Thể loại *</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Ví dụ: Hành động, Viễn tưởng"
            className={errors.genre ? 'input-error' : ''}
          />
          {errors.genre && <span className="error-text">{errors.genre}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Đánh giá (1 - 10) *</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Ví dụ: 8.5"
            step="0.1"
            min="1"
            max="10"
            className={errors.rating ? 'input-error' : ''}
          />
          {errors.rating && <span className="error-text">{errors.rating}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="originalPrice">Giá vé gốc (VNĐ) *</label>
          <input
            type="number"
            id="originalPrice"
            name="originalPrice"
            value={formData.originalPrice}
            onChange={handleChange}
            placeholder="Ví dụ: 120000"
            min="0"
            className={errors.originalPrice ? 'input-error' : ''}
          />
          {errors.originalPrice && <span className="error-text">{errors.originalPrice}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="currentPrice">Giá vé hiện tại (VNĐ) *</label>
          <input
            type="number"
            id="currentPrice"
            name="currentPrice"
            value={formData.currentPrice}
            onChange={handleChange}
            placeholder="Ví dụ: 90000"
            min="0"
            className={errors.currentPrice ? 'input-error' : ''}
          />
          {errors.currentPrice && <span className="error-text">{errors.currentPrice}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Mô tả phim</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Mô tả tóm tắt nội dung phim"
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Đường dẫn ảnh bìa (Image URL)</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Ví dụ: https://example.com/image.jpg"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-success" disabled={isSubmitting}>
          {isSubmitting ? 'Đang lưu...' : buttonText}
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
