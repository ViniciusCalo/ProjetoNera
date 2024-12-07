import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array de objetos
};

const classroomSlice = createSlice({
    name: 'classrooms',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload.map(item => ({
                ...item,
                studentCount: item.studentCount || 0, // Garantia que `studentCount` sempre existe
            }));
        },
        addItem(state, action) {
            state.items.push({ ...action.payload, studentCount: action.payload.studentCount || 0 });
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem(state, action) {
            const { id, data } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                state.items[index] = { ...data, studentCount: data.studentCount || 0 };
            }
        },
    },
});

export const { setItems, addItem, removeItem, updateItem } = classroomSlice.actions;

export default classroomSlice.reducer;
