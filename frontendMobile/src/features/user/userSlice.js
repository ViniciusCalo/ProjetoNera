import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  profileImageUrl: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setProfileImageUrl: (state, action) => {
      state.profileImageUrl = action.payload;
    },
  },
});

export const {setName, setProfileImageUrl } = userSlice.actions;
export default userSlice.reducer;
