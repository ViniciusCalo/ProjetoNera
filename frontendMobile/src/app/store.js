import { configureStore } from '@reduxjs/toolkit'
import userRedducer from '../features/user/userSlice'

export default configureStore({
  reducer: {
    user: userRedducer,
  },
})

