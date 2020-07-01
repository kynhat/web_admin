import { REQUEST_API_DATA_ND, receiveApiData_ND } from "../actions";
import { fetchData_ND } from "../Api/api";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA_P, receiveApiData_P } from "../actions/phong";
import { fetchData_P } from "../Api/api";

function* getApiData_ND(action) {
  try {
    const data = yield call(fetchData_ND);
    console.log("-----------test data---nguoidung---------", data);
    yield put(receiveApiData_ND(data));
  } catch (e) {
    console.log(e);
  }
}

function* getApiData_P(action) {
  try {
    const data = yield call(fetchData_P);
    console.log("-----------test dât--phong------", data);
    yield put(receiveApiData_P(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* Mysaga() {
  yield takeLatest(REQUEST_API_DATA_ND, getApiData_ND);
  yield takeLatest(REQUEST_API_DATA_P, getApiData_P);
}
