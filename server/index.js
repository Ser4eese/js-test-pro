import express from 'express'
const app = express();
app.use(express.json());

let todos = [];
let idCounter = 1;
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  /**добавляем заголовки */
  next();
});

app.get('/todos', (req, res) => {
  /**возвращаем список todo */
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
 /**добавляем todo */
});

app.delete('/todos/:id', (req, res) => {
  /** удаляем todo */
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.resetState = () => {
  todos = [];
  idCounter = 1;
};

export default app // Для тестов