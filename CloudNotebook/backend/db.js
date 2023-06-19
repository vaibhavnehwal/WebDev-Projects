const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?directConnection=true&readPreference=primary"

const connectToMongo = ()=> {
    mongoose.connect(process.env + mongoURI, ()=>{
    console.log("Connected to Mongo Successfully");
});
}
mongoose.set ("strictQuery", false);
module.exports = connectToMongo;


