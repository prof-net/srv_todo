const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express()

const PORT = config.get('port') || 5000;

app.use(express.json({extended: true}))

app.use('/api', require('./routes/aim'))
app.use('/api', require('./routes/type'))
app.use('/api', require('./routes/project'))
app.use('/api', require('./routes/task'))

async function start() {
    try {
        await mongoose.connect('mongodb://localhost/school', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log('app run...'))
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}

start();

