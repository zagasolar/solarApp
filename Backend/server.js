const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
const MongoClient = require('mongodb').MongoClient

app.listen(3030,(req,res)=>{
    console.log('server is running')
})

app.post('/get',(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017",{ useUnifiedTopology: true ,useNewUrlParser:true},function(err,db){
        var dataBase = db.db('Login_db')
        console.log(req.body.username)
        dataBase.collection('test').findOne({username: req.body.username },function(err,result){
            if(result == null)
            {
                res.send('Invalid username or password')
            }
            else
            {
                if((result.password)== (req.body.password))
                {
                    console.log(result.password)
                    console.log(req.body.password)
                    res.send('correct password')
                }
                else
                {
                    res.send('Invalid username or password')
                }
            }
        })
    })
})