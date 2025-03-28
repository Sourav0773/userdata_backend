import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

let users = [];
for (let i = 1; i <= 10000; i++) {
  users.push({
    id: i,
    name: `User ${i}`,
    email: `user${i}@example.com`,
    phone: `123-456-78${i.toString().padStart(2, '0')}`
  });
}

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
