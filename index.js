require('dotenv').config();

const cors = require('cors')
const express = require('express');
const app = express();
app.use(cors());

const path = require('path')

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'Views')))

app.set('views', path.join(__dirname, 'Views'))
app.set('view engine', 'pug')




app.use('', require('./Route/user2'));
app.use('', require('./Route/report2'));
app.use('/post', require('./Route/post2'));
app.use('/comment', require('./Route/comment2'));

app.get('/home', async function(req,res) {
    res.render('home', {
        message: 'GATAU'
    });
})


//app.listen(process.env.PORT, () => console.log('Server running'))
const start = async () => {
    try {
        const localhost = await app.listen(process.env.PORT);
        console.info(`Server running on ${localhost.address().port}`);
    } catch(err) {
        console.error(err);
    }
}

start();