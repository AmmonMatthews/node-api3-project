const express = require('express');
const Users = require("");
const Posts = require("")

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${rew.originalUrl} `)

  next();
}

// validates the user id on every request that expects a user id parameter
function validateUserId(req, res, next) {
    const { id } = req.params
    if (id === user_id){
      return req.user = req.body;
    } else {
      return res.status(400).json({ message: "invalid user id"});
    }

    next();
}

// Validates the body on a request to create a new user
function validateUser(req, res, next){
  if(!req.body){
     res.status(400).json({ message: "missing user data" });
  } else if (!req.body.name){
     res.status(400).json({ message: "missing required name field" });
  } else{
    next();
  }
}
// Validates the body on a request to create a new post
function validatePost(req, res, next){
    if(!req.body){
      res.status(400).json({ message: "missing post data" });
    } else if (!req.body.text){
      res.status(400).json({ message: "missing required text field" });
    } else{
      next();
    }
    
}
      
module.exports = server;
