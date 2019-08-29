import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import * as MessageController from './controllers/message';

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => console.log('TCBot started at port 3000!'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', MessageController.handleIncomingMessage);
