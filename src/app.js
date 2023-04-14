import express, { request, response } from 'express';
import { port } from "./config/index.js";
import  mongoose from 'mongoose'

const app = express();

mongoose.Promise = global.Promise


mongoose.connect('mongodb+srv://dev:ejlEOjy9ohZeMdI7@intechmom.pt69jaf.mongodb.net/?retryWrites=true&w=majority')

var db = mongoose.connection

db.on('error', (err)=>{
  console.log('connection error', err)
})

db.once('open', ()=>{
  console.log('Connection to DB successful')
})

app.get('/',(request, response, error) =>{
 
  response.send('status: ok')

})

app.listen(port, (error)=>{

  if(error){
    console.log('Server Error: Failed')
    process.exit(1)
  }
  console.log(`Server listening in port ${port}`);
})
