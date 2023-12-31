import { createSlice } from "@reduxjs/toolkit";
import { BookState } from "../../common/interfaces";

const bookSlice = createSlice({
  name: "bookList",
  initialState: {
    bookList: [],
    favoritesList: [],
    authorDetails: [],
    isLoading: "",
  } as BookState,

  reducers: {
    fetchRandomBooks: (state) => {
      state.isLoading = "loading";
    },
    fetchFavoritesBooks: (state, { payload: selectedRows }) => {
      state.favoritesList = selectedRows;
    },
    fetchAuthorDetails: (state, { payload: author }) => {
      state.isLoading = "loading";
    },
    setBookList: (state, { payload: books }) => {
      state.bookList = books.items;
      state.isLoading = "success";
    },
    setAuthorDetails: (state, { payload: authorDetails }) => {
      state.authorDetails = authorDetails.items;
      state.isLoading = "success";
    },
    setError: (state) => {
      state.isLoading = "error";
    },
  },
});

export const {
  fetchRandomBooks,
  fetchAuthorDetails,
  setBookList,
  setError,
  setAuthorDetails,
  fetchFavoritesBooks,
} = bookSlice.actions;

export const selectBooks = (state: { bookList: BookState }) =>
  state.bookList.bookList;
export const selectAuthorDetails = (state: { bookList: BookState }) =>
  state.bookList.authorDetails;
export const selectFavorites = (state: { bookList: BookState }) =>
  state.bookList.favoritesList;
export default bookSlice.reducer;
