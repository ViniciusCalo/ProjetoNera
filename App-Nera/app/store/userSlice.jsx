import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Teste',
  profileImageUrl: 'https://stnerafiles.blob.core.windows.net/images/0ca542bf-a0f2-43ce-ac32-64245f226400.jpg?sp=r&st=2024-07-31T00:45:09Z&se=2024-08-05T08:45:09Z&spr=https&sv=2022-11-02&sr=b&sig=yJlBYxOsz8v0i0eZCqu0RlIxishajj7yyHTwdzLKI0Y%3D',
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