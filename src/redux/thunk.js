import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const response = await axios.get('http://api.quotable.io/random');
  return response.data;
});
