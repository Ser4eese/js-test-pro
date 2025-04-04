import express from 'express'
const app = express();
app.use(express.json());

let todos = [];
let idCounter = 1;
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  /**добавляем заголовки, настройка CORS, типа контента и т.д. */
  next();
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  /**добавляем todo */
});

app.delete('/todos/:id', (req, res) => {
  /** удаляем todo */
});

/** Endpoint для получения списка todo  делаем сами, слушать должен по адресу `/todos` */

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.resetState = () => {
  todos = [];
  idCounter = 1;
};

export default app // Для тестов