import { configureStore } from '@reduxjs/toolkit'
import userRedducer from './userSlice'

export default configureStore({
  reducer: {
    user: userRedducer,
  },
})