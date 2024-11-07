// TrailCard.test.js
import { render, screen } from '@testing-library/react';
import TrailCard from './index';

describe('TrailCard Component', () => {
    const props = {
        titulo: 'React Basics',
        image: 'https://example.com/image.jpg',
        color: '#3498db',
    };

    it('renders the TrailCard component with title, image, and background color', () => {
        render(<TrailCard {...props} />);

        // Verifica se o título está sendo exibido
        expect(screen.getByText('React Basics')).toBeInTheDocument();

        // Verifica se a imagem possui o src e alt corretos
        const image = screen.getByAltText('React Basics');
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');

    // Verifica se o card está com o background gradiente contendo a cor correta
    const card = screen.getByText('React Basics').closest('div');
    expect(card).toHaveStyle(`background: radial-gradient(circle at top right, ${props.color}, #fff 40%)`);

    });
});
