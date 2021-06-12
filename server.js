// const express     = require('express');
// const mongoose    = require('mongoose');
// const morgan      = require('morgan');
// const bp          = require('body-parser');

// mongoose.connect('mongdb://localhost:27017/Login_db',{useNewUrlParser:true, useUnifiedTopology:true})
// const db = mongoose.connection

// db.on('error',(err) => {
//     console.log(err);
// })

// db.once('open', () => {
//     console.log("Database Connection Established!!");
// })
// const app = express();
// app.use(morgan('dev'))
// app.use(bp.urlencoded({extended:true}))
// app.use(bp.json())

// const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })
// const login = (req,res,next) => {
//     var username = req.body.username
//     var password = req.body.password

//     dataBase.collection('test').findOne({email:username})
//     .then(user => {
//         if(user){
            
//         }
//         else{
//             res.json({
//                 message:'No user found!'
//             })
//         }
//     })














// // app.get('/get' , (req , res)=>{
// //     const MongoClient = require('mongodb').MongoClient
// //     var str = ''
// //     MongoClient.connect("mongodb://localhost:27017/" ,{useUnifiedTopology:true}, (err , db)=>{
// //     var databse = db.db('prathii')
// //     var cursor = databse.collection('registers').find({})
// //     cursor.each((err , item)=>{
// //         if(item != null){
// //             str = str + item.lastName + "</br>"
// //         }
// //         res.send(str)
// //     })
// // })
// // })