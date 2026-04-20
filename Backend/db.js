const mongoose = require("mongoose");

const connectDb = async() => {
   
    try {
         await mongoose.connect(process.env.MONGO_URL);
         console.log("db is connected");
    } catch (error) {
        console.log(error, "db error");
        process.exit(1);
    }
}

module.exports = connectDb;
