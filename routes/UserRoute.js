const express = require("express").Router();

const {addUser,getallUser, getUserById, updateUser, deleteUser}=require('../controllers/UserController')

express.post("/register",addUser);
express.get("/getallUser",getallUser);
express.get("/getUser/:id",getUserById);
express.put("/updateUserById/:uid",updateUser);
express.delete("/deleteUserById/:did",deleteUser);

module.exports=express;