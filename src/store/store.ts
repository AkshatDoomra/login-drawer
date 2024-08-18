import { configureStore } from '@reduxjs/toolkit'
// ...
import userReducer from "../slice/slice"
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';

const persistconfig = {
  key: "root",
  storage,
  blacklist: ["somethingTemporary"],
};

const persistedReducer = persistReducer(persistconfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']