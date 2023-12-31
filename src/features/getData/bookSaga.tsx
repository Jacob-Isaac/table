import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularBooks, getAuthorDetails } from "./getData";
import {
  fetchRandomBooks,
  setBookList,
  setAuthorDetails,
  setError,
  fetchAuthorDetails,
} from "../tableComponent/slice";

export function* fetchRandomBooksWorker({}: ReturnType<
  typeof fetchRandomBooks
>): Generator<any, void, unknown> {
  try {
    const popularBooks = yield call(getPopularBooks);
    yield put(setBookList(popularBooks));
  } catch (error) {
    yield put(setError());
  }
}

export function* fetchAuthorDetailsWorker({
  payload: authors,
}: ReturnType<typeof fetchAuthorDetails>): Generator<any, void, unknown> {
  try {
    if (typeof authors !== "undefined") {
      const authorName = yield call(getAuthorDetails, authors);
      yield put(setAuthorDetails(authorName));
    }
  } catch (error) {
    yield put(setError());
  }
}

export function* bookSaga() {
  yield takeLatest(fetchRandomBooks.type, fetchRandomBooksWorker);
  yield takeLatest(fetchAuthorDetails.type, fetchAuthorDetailsWorker);
}
