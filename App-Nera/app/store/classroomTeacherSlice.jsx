import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array de objetos
};

const classroomTeacherSlice = createSlice({
    name: 'classrooms',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        addItem(state, action) {
            state.items.push(action.payload);
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem(state, action) {
            const { id, data } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                state.items[index] = data;
            }
        },
    },
});

export const { setItems, addItem, removeItem, updateItem } = classroomTeacherSlice.actions;

export default classroomTeacherSlice.reducer;
