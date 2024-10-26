//criar um test simples
import React from 'react';
import { render } from '@testing-library/react';
import Perfil from '../pages/Perfil';

test('renders learn react link', () => {
    //renderizar o componente
    render(<Perfil />);
});