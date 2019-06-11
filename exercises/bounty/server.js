const express = require('express')
//const uuid = require('uuid/v4')
// console.log(uuid())
const app = express()
const PORT = 2900;
//const data = require('./database') // --> in Node
const mongoose = require('mongoose');
//middleware are methods used in between requests and responses
//express router is to have cleaner code. Like components in React, express router 
//is to organize
app.use(express.json())
app.use("/bounty", require("./destinationRoute"));


mongoose.connect('mongodb://localhost:27017/bounty-hunter',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));


app.listen(PORT, () => {
    console.log('server is running on port ' + 2900)
});





// app.get('/bounty', (request, response)=> {
//     console.log(response.query)
//     response.send(data);
// });

// app.get('/bounty', (request, response) => {
//     if (request.query.timeToGo && request.query.price){
//         console.log(typeof request.query.price)
//         const timeToGoResults = data.filter(bounty => bounty.timeToGo === request.query.timeToGo)
//         const final = timeToGoResults.filter(bounty => bounty.price == request.query.price)
//         response.send(final)
//     } 
// })

// app.post('/bounty', (request, response)=> {
//     const newbounty = request.body;
//     newbounty._id = uuid();
//     data.push(newbounty);
//     response.send(newbounty);
// });

// app.delete('/bounty/:bountyID', (request, response)=> {
//    data.forEach((bounty, i) => {
//        if(request.params.bountyID === bounty._id){
//            data.splice(i, 1);
//        }
//    })
//    response.send({
//        msg: 'Successfully Deleted bounty'
//    })
// });

// app.put('/bounty/:bountyID', (request, response) => {
//     const updatedbounty = request.body;
//     data.forEach(bounty => {
//         if(request.params.bountyID === bounty._id){
//             return Object.assign(bounty, updatedbounty);
//         }
//     })  
//     response.send({
//         msg: 'Successfully Updated bounty',
//         data
//     });
// });
