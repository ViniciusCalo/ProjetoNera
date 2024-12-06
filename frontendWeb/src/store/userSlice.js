import { createSlice } from '@reduxjs/toolkit';
import user from '../assets/user.png';

const initialState = {
  name: 'Teste',
  profileImageUrl: user,
  token: null, // Token de autenticação
  role: null, // Papel do usuário: 'student', 'teacher', etc.
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
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    logout: (state) => {
      state.name = 'Teste';
      state.profileImageUrl = user;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setName, setProfileImageUrl, setToken, setRole, logout } = userSlice.actions;
export default userSlice.reducer;
