import express from 'express';
import dbConnection from './config/config.js';
import routes from './routes/index.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(routes);
dbConnection();




app.listen(PORT, () => {
    `Server started on port ${PORT}`;
});
