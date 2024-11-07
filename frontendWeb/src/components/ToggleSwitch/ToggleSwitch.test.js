// SwitchProfile.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import SwitchProfile from './index';

describe('SwitchProfile Component', () => {
  const mockOnClick = jest.fn();

  it('renders with "Aluno" text when value is not "teacher"', () => {
    render(<SwitchProfile value="student" onClick={mockOnClick} />);
    expect(screen.getByText('Aluno')).toBeInTheDocument();
  });

  it('renders with "Professor" text when value is "teacher"', () => {
    render(<SwitchProfile value="teacher" onClick={mockOnClick} />);
    expect(screen.getByText('Professor')).toBeInTheDocument();
  });

  it('sets flexDirection to "row" when value is not "teacher"', () => {
    const { container } = render(<SwitchProfile value="student" onClick={mockOnClick} />);
    const viewSwitch = container.firstChild;
    expect(viewSwitch).toHaveStyle('flex-direction: row');
  });

  it('sets flexDirection to "row-reverse" when value is "teacher"', () => {
    const { container } = render(<SwitchProfile value="teacher" onClick={mockOnClick} />);
    const viewSwitch = container.firstChild;
    expect(viewSwitch).toHaveStyle('flex-direction: row-reverse');
  });

  it('calls onClick function when Switch is clicked', () => {
    render(<SwitchProfile value="student" onClick={mockOnClick} />);
    const switchElement = screen.getByText('Aluno'); // "Aluno" or "Professor" text inside Switch
    fireEvent.click(switchElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
