import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Promise from "bluebird";
import auth from './routes/auth';

const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/mydb', { useMongoClient: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connection Successful!")
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api/auth', auth);

app.listen(3000, () => console.log('listen on port: 3000'));