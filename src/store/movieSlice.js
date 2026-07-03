import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieService from '../services/movieService';

// Thunks xử lý gọi API bất đồng bộ
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      return await movieService.getAllMovies();
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message || 'Lỗi không xác định khi tải danh sách phim');
    }
  }
);

export const fetchMovieById = createAsyncThunk(
  'movies/fetchMovieById',
  async (id, { rejectWithValue }) => {
    try {
      return await movieService.getMovieById(id);
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message || 'Lỗi không xác định khi tải chi tiết phim');
    }
  }
);

export const addMovie = createAsyncThunk(
  'movies/addMovie',
  async (movieData, { rejectWithValue }) => {
    try {
      return await movieService.createMovie(movieData);
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message || 'Lỗi không xác định khi thêm phim');
    }
  }
);

export const updateMovie = createAsyncThunk(
  'movies/updateMovie',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await movieService.updateMovie(id, data);
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message || 'Lỗi không xác định khi cập nhật phim');
    }
  }
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (id, { rejectWithValue }) => {
    try {
      await movieService.deleteMovie(id);
      return id; // Trả về ID đã xóa để lọc ở reducer
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message || 'Lỗi không xác định khi xóa phim');
    }
  }
);

const initialState = {
  list: [],
  currentMovie: null,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearCurrentMovie: (state) => {
      state.currentMovie = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Tải danh sách phim
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Tải chi tiết phim
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Thêm phim
      .addCase(addMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Cập nhật phim
      .addCase(updateMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.list.findIndex(m => m.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        if (state.currentMovie?.id === action.payload.id) {
          state.currentMovie = action.payload;
        }
      })
      .addCase(updateMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Xóa phim
      .addCase(deleteMovie.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.list = state.list.filter(m => m.id !== action.payload);
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearCurrentMovie, clearError } = movieSlice.actions;
export default movieSlice.reducer;
