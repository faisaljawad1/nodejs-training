const mongoose = require('mongoose');

async function connectDatabase() {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/nodejs-training', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        if (connection.connections[0].name === 'nodejs-training') {
            console.log('Connected to MongoDB');
        } else {
            throw new Error('Invalid database name');
        }
    } catch (err) {
        console.log('Error connecting to MongoDB:', err);
    }
}


module.exports = connectDatabase;
