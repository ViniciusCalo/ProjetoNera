import { configureStore } from '@reduxjs/toolkit'
import userRedducer from './userSlice'
import classroomSlice from './classroomSlice'

export default configureStore({
  reducer: {
    user: userRedducer,
    classrooms: classroomSlice,
  },
})