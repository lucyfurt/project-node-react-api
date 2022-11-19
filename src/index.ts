import express from 'express';
import mongoose from 'mongoose';
import {router} from './router';

mongoose.connect('mongodb+srv://lucyfurt:lulu1010@cluster0.fmmd1rt.mongodb.net/test')
    .then(()=>{
        const app = express();
        const port = '3001';
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(()=>console.log('erro ao conectar ao mongodb'));

