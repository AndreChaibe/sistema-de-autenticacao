import express from 'express';

const app = express();


app.get('/login', (req, res) => {
  res.send('Teste servidor!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta http://localhost:3000');
});