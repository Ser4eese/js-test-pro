import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './index.jsx';

describe('Задача 2: Использование props', () => {
  it('отображает персонализированное приветствие с именем Анна', () => {
    render(<App name="Анна" />);
    const heading = screen.getByText('Привет, Анна!');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});