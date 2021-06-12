app.get('/get' , (req , res)=>{
    const MongoClient = require('mongodb').MongoClient
    var str = ''
    MongoClient.connect("mongodb://localhost:27017/" ,{useUnifiedTopology:true}, (err , db)=>{
    var databse = db.db('prathii')
    var cursor = databse.collection('registers').find({})
    cursor.each((err , item)=>{
        if(item != null){
            str = str + item.lastName + "</br>"
        }
        res.send(str)
    })
})
})