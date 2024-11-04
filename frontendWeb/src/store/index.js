import { configureStore } from '@reduxjs/toolkit'
import userRedducer from './userSlice'
import classroomSlice from './classroomSlice'
import trailsSlice from './trailsSlice'

export default configureStore({
  reducer: {
    user: userRedducer,
    classrooms: classroomSlice,
    trails: trailsSlice
  },
})