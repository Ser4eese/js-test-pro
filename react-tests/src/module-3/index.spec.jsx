import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './index.jsx';

describe('Задача 3: Счётчик с состоянием', () => {
  it('отображает начальное значение счётчика 0', () => {
    render(<App />);
    const counterText = screen.getByText('Счётчик: 0');
    expect(counterText).toBeInTheDocument();
  });

  it('увеличивает счётчик на 1 при клике на кнопку', () => {
    render(<App />);
    const button = screen.getByText('Увеличить');
    fireEvent.click(button);
    const counterText = screen.getByText('Счётчик: 1');
    expect(counterText).toBeInTheDocument();
  });
});