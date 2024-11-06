import express from 'express'
import {v4 as uuidv4} from 'uuid' // it will generate unique ids by importing a function

const router = express.Router() // This creates a new router instance, which will be used to define routes related to user operations.

let users = []; //mock database for storing user data.

  router.get('/',(req,res)=>{  //sets up a route that responds to HTTP GET requests.
    res.send(users)
  })
  router.get('/:id',(req,res)=>{
    const {id} = req.params; //extracts the id parameter from the URL//
    const foundUser = users.find( function(user){ user.id===id});
    //searches through users array to find user obj; id=extracted id
    res.send(foundUser);
  })

  router.delete('/:id', function(req,res){
    const{id}= req.id;
    users = users.filter((user) =>{ user.id !== id})
    res.send(`${id} deleted successfully`) 
  })

  router.post('/',function(req,res){
    const user= req.body;  /*When a client sends a POST request with user data (e.g., in JSON format), the server 
                              extracts the user information from req.body.*/

      users.push({...user , id:uuidv4()});
      res.send(`${user.name} has been added to the Database`);

  }
);

 router.patch('/:id', (req,res)=>{
  const{name,mail}=req.body;
  const user = users.find((user)=>{user.id===id})

  if (user.id !==id)
  {
    console.log("user not found")
  }

  if(name) user.name = name;
  if(mail) user.mail = mail;
  res.send(`user found at ${id}`)
 }
);
  export default router;