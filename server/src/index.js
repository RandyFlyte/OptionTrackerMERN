import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRouter } from '../src/routes/users.js';
import { optionsRouter } from '../src/routes/options.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// All endpoints in userRouter(users.js) first route through /auth, for example /auth/login
app.use('/auth', userRouter);

app.use('/options', optionsRouter);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`
    );

app.listen(3001, () => console.log("Server has started..."));
