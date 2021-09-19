import { all } from 'redux-saga/effects';

import cart from './cart/sagas'

type RootSaga = ReturnType<typeof all>;

export default function* rootSaga(): Generator<RootSaga> {
  return yield all([
    cart,
  ]);
}