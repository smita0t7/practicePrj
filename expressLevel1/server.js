import express from 'express'
import bodyparser from 'body-parser'

import userRouter from './routes/user.js'
const app = express(); // an instance of express aplication is creted and stored in the app variable. It will handle routing and middleware.

const PORT = 3000;

app.use(bodyparser.json())
app.use('/users', userRouter)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('api', function(req,res){
    res.json(
        {
            "message" : "this is api"
        }
    )
})

app.listen(PORT , ()=> console.log (`server is running on ${PORT}`))

// this is a practice project to help me keep in track of the flow controll of this.