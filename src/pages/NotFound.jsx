import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#ff4d4f', margin: '0 0 20px 0' }}>404</h1>
      <h2>Không tìm thấy trang yêu cầu</h2>
      <p style={{ margin: '20px 0', color: '#8c8c8c' }}>
        Đường dẫn bạn truy cập không tồn tại hoặc đã bị gỡ bỏ.
      </p>
      <Link
        to="/"
        className="btn btn-primary"
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
