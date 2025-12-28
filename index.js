const express = require("express");
const app = express();
const { sequelize, connectDB } = require("./database/Database")

app.use(express.json())
app.use("/api/user",require('./routes/UserRoute'))
app.use("/api/product",require('./routes/ProductRoute'))
app.use("/api/feedback",require('./routes/ContactRoute'))

app.get("/",(req,res) =>{
    res.json({message: "Welcome to the Home Page"});
});

const startServer = async () => {
    await connectDB();
    await sequelize.sync();
    app.listen(3000, ()=>{
    console.log(`Server is running on port ${3000}`);
    console.log(`Server is running on port http://localhost:3000`);
});
};

startServer();