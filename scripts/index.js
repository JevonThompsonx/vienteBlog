import express from 'express';
const app = express();
import path from 'path';
import ejs from 'ejs';
import fileDirName from './file-dir-name.js';
const { __dirname, __filename } = fileDirName(import.meta);
let port = 8080;
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'../views'))
app.use(express.static(path.join(__dirname,'../')));

app.listen(port, ()=> {
    console.log('Listening on port 8080')
})

app.get('/', (req,res)=> {
    res.render('index.ejs')
})

app.get('*', (req,res)=> {
    
})

