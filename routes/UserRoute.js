const express = require("express").Router();

const {addUser,getallUser, getUserById, updateUser, deleteUser, loginUser}=require('../controllers/UserController')

express.post("/register",addUser);
express.get("/getallUser",getallUser);
express.get("/getUser/:id",getUserById);
express.put("/updateUserById/:uid",updateUser);
express.delete("/deleteUserById/:did",deleteUser);
express.post("/login",loginUser);

module.exports=express;