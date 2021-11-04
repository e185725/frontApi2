import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { title:'',body:'',image:null},
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer