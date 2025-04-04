import { render, screen } from '@testing-library/react';
import App from './index.jsx';

describe('Задача 1: Первый компонент', () => {
  it('отображает текст "Привет, React!" в заголовке h1', () => {
    render(<App />);
    const heading = screen.getByText('Привет, React!');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});