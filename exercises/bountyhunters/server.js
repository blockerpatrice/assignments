const express = require("express");
const app = express();
const data = require("./database");
const uuid = require("uuid/v4");
const PORT = 2988;


app.use(express.json())

app.get('/bounty', (request, response) => {
    console.log(request.query)
    //first argument is the endpoint url

    // if(request.query.type && request.query.lname){
    //     const typeResults = data.filter(typeOfThing => typeOfThing.type === request.query.type)
    //     results = typeResults.filter(name =>name.lname === request.query.lname)
    // }else if(request.query.type){
    //     const results = data.filter(bounty => bounty.type === request.query.type)
    // }
    response.send(data);
});

// app.get('/bounty/:bountyID', (request, response) => {
//     console.log(request.params.bountyID)
//     const results = data.filter(bounty => bounty._id === request.params.bountyID)
//     response.send(results)
// });

// app.post('/bounty', (request, response)=>{
// //post is sending over a new object of data
//     const newBounty = request.body;
//     newBounty._id = uuid();
//     data.push(newBounty);
//     response.send({newBounty}); //whatever you want to get back. Can 
// });

// app.delete('/bounty/:bountyID', (request, response)=> {
//    data.forEach((bounty, i) => {
//        if(request.params.bountyID === bounty._id){
//            data.splice(i, 1)
//        }
//    })
//    response.send({
//        msg: 'Successfully Deleted Bounty!'
//    })
// });

// app.put('/bounty/:bountyID', (request, response) => {
//     const updatedbounty = request.body;
//     data.forEach(bounty => {
//         if(request.params.bountyID === bounty._id){
//             return Object.assign(bounty, updatedbounty)
//         }
//     })  
//     response.send({
//         msg: 'Successfully Updated bounty',
//         data
//     })
// });

app.listen(PORT, () => {
    console.log("App is listening on port 4444");
});