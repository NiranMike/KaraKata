import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  REHYDRATE,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice"
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store = configureStore({
  reducer: { cart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
      }
    })
});

export let persistor = persistStore(store)