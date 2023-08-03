import mongoose from "mongoose" 

mongoose.connect("mongodb+srv://Leticiaabarb:Lele9898123@cluster0.f0kqbrl.mongodb.net/node-express");

let db = mongoose.connection;

export default db;