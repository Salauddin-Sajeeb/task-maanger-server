const mongoose = require('mongoose');

const url = "mongodb+srv://alfreadsajeeb:UJSMAW6wo5HixmoV@cluster0.jbfn8jn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDatabase = async (req, res) => {
    try {
        await mongoose
            .connect(url)
            .then(() => {
                console.log("Database Connected!!");
            });
    } catch (error) {
        console.error("Database Connection Failed");
    }
};
connectDatabase();