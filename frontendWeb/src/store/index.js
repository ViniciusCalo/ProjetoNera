import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import classroomReducer from './classroomSlice';
import trailsReducer from './trailsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    classrooms: classroomReducer,
    trails: trailsReducer
  },
});
