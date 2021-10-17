import App from './App';
const express = require('express');

const app = express();

const sql = require('sqlite').verbose();

let db = sql.Database('./var/myapp.sqlite3', (err) =>{
  if(err){
    console.error(err.message);
  }
  console.log('Connected to database.')
})


App.post("/register", (req, res) =>{
    const username = req.body.username;
  
    let sql = "INSERT INTO users (username) VALUES(?)"
    db.all(sql, [username,], (err,result)=>{
        if (err) {
            return console.error(err.message);
        }
        return result;
    });
    return res;
});

db.close();
