const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const EmailController = require('./controllers/EmailController');

const app = express();
const port = 3333;
const emailController = new EmailController();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
