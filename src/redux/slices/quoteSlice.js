import { createSlice } from '@reduxjs/toolkit';
import { fetchQuote } from '../thunk';

const quoteslice = createSlice({
  name: 'quote',
  initialState: {
    content: null,
    author: null,
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.content = payload.content;
        state.author = payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quoteslice.reducer;
