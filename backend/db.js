const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/bandhu?readPreference=primary&ssl=false&directConnection=true";  

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectToMongo;
