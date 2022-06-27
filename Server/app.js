
import express from 'express';
import mongoose from 'mongoose';

import home from './routes/home';

const app = express();

app.use(express.json());
// app.use(cors());

app.use("/",home);


mongoose.connect('mongodb://127.0.0.1:27017/we16308');



app.listen(8000, () => {
    console.log("Server is running on port 8000");
})  