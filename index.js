import express from 'express';
import bodyParser from 'body-parser';

//route
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//route
app.use('/', usersRoutes);


app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`);
});