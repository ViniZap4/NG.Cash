import express from 'express';
import cors from 'cors';
import router from './router';

const HOST = '0.0.0.0';
const PORT = 3333;

const app = express()

app.use(cors());
app.use(express.json());
app.use(router);


app. listen(PORT, HOST);