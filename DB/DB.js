const mongoose = require('mongoose');
require('dotenv').config()

// connection of DB exported to server.js
const DBconnect = async () => {
    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(
            process.env.MONGO_URI,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log(" Mongoose is connected")
        );
    
      } catch (e) {
        console.log("could not connect");
      }
}
module.exports = DBconnect