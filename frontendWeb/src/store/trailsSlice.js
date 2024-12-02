import { createSlice } from '@reduxjs/toolkit';
import fracaoicon from '../assets/fracao.svg';        // Importe os ícones corretamente
import porcentagemicon from '../assets/porcentagem.svg';
import geometriaicon from '../assets/geometria.svg';
import matrizesicon from '../assets/matrizes.svg';
import expressaoicon from '../assets/expressao.svg';

const initialState = [
    { id: 1, name: 'Fração', image: fracaoicon, color: "#F20574" },
    { id: 2, name: 'Porcentagem', image: porcentagemicon, color: "#88A9FD" },
    { id: 3, name: 'Geometria', image: geometriaicon, color: "#FBBC05" },
    { id: 4, name: 'Matrizes', image: matrizesicon, color: "#4ED9D9" },
    { id: 5, name: 'Expressão', image: expressaoicon, color: "#F29F05" },
];

const trailsSlice = createSlice({
    name: 'trails',
    initialState,
    reducers: {
        // Defina actions aqui caso precise modificá-las no futuro
    },
});

export default trailsSlice.reducer;
