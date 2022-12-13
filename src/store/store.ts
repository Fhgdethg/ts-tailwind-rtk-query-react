import { configureStore } from '@reduxjs/toolkit'
import settingThem from './themeSlice'
import { todoApi } from '../api/todoApi'

export const store = configureStore({
  reducer: {
    settingThem,
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware: Function) => 
    getDefaultMiddleware().concat(todoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch