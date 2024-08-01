import { configureStore } from '@reduxjs/toolkit'
import userRedducer from './userSlice'
import classroomTeacherSlice from './classroomTeacherSlice'

export default configureStore({
  reducer: {
    user: userRedducer,
    classrooms: classroomTeacherSlice,
  },
})