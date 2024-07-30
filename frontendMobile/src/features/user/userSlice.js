import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Teste',
  profileImageUrl: 'https://stnerafiles.blob.core.windows.net/images/af639a4c-6795-4052-a3db-8380d9619f1f.jpg?sp=r&st=2024-07-29T21:41:43Z&se=2024-07-30T05:41:43Z&spr=https&sv=2022-11-02&sr=b&sig=Q7LI%2FxSG%2FuL5VlBycJN80lx4rD5iX4%2FGOtcESrOeL44%3D',
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
