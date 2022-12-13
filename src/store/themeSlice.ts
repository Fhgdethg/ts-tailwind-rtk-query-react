import { createSlice } from '@reduxjs/toolkit'

type iState = {
  themStatus: string | undefined | null
}

const initialState: iState = {
  themStatus: localStorage.getItem('them')
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    settingThem(state) {
      if (state.themStatus === '') state.themStatus = 'dark'
      else state.themStatus = ''
      localStorage.setItem('them', state.themStatus)
    }
  }
})

export const { settingThem } = themeSlice.actions
export default themeSlice.reducer