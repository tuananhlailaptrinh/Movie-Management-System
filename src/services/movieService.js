import api from './api';

const movieService = {
  // Lấy danh sách tất cả phim
  getAllMovies: async () => {
    const response = await api.get('/movies');
    return response.data;
  },

  // Lấy thông tin chi tiết một bộ phim theo ID
  getMovieById: async (id) => {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  },

  // Thêm phim mới (Create)
  createMovie: async (movieData) => {
    const response = await api.post('/movies', movieData);
    return response.data;
  },

  // Cập nhật thông tin phim (Update)
  updateMovie: async (id, movieData) => {
    const response = await api.put(`/movies/${id}`, movieData);
    return response.data;
  },

  // Xóa phim (Delete)
  deleteMovie: async (id) => {
    const response = await api.delete(`/movies/${id}`);
    return response.data;
  },
};

export default movieService;
