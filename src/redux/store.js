import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./feature/appSlice.js";

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app', 'auth'], // which reducer want to store
};

export const rootReducer = combineReducers({
  app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: import.meta.env && import.meta.env.MODE !== 'production',
  });
};

export const store = setupStore();