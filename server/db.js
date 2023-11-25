const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://eduverse:eduverse-USB@cluster0.1l0zkby.mongodb.net/?retryWrites=true&w=majority';


const mongoDB = async () => {
    console.log('Database');
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB successfully!');

        // const collection = mongoose.connection.db.collection('users');
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDB;

