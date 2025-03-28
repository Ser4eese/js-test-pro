import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import app from './index.js';

describe('Express To-Do API', () => {
  beforeEach(() => {
    // Сбрасываем todos перед каждым тестом
    console.log(app)
    app.resetState();
  });

  it('GET /todos returns empty array initially', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /todos adds a new todo', async () => {
    const res = await request(app).post('/todos').send({ text: 'Learn Express' });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: 1, text: 'Learn Express' });
  });

  it('DELETE /todos/:id removes a todo', async () => {
    await request(app).post('/todos').send({ text: 'Learn Express' });
    const res = await request(app).delete('/todos/1');
    expect(res.status).toBe(204);
    const todos = (await request(app).get('/todos')).body;
    expect(todos).toEqual([]);
  });
});