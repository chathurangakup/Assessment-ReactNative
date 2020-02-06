import { all } from 'redux-saga/effects';

import startUpSaga from './StartUp/saga';


export default function* rootSaga() {
  yield all([
   startUpSaga(),

  ]);
};