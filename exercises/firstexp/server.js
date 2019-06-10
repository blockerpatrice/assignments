const express = require('express');//this line is importing express
const app = express();
const data = require('./database');

app.use(express.json())

app.get('/destination', (request, response) =>{
    response.send(data);
    //response.send takes an object as input and sends to the client
    //app.get tells you what to do when a get request route is called
})
app.get('/destination/:destinationID', (request,response)=>{
    console.log(request.params)
})

// app.delete('/destination/:destinationID', (request, response) =>{
//     console.log(request.params);
//     const results = data.filter(destinationID => destination._id !== request.params.destionationID)
//     response.send(results)
//     response.send('deleted')
// })


// app.delete('/destination', (request,response) => {
//     data.forEach((destination,i) =>{
//         if(request.params.destinationID === destination._id){
//             data.splice(i,1)
//         }
//     })
//     response.send({
//         msg:'Successfully deleted',
//     })
// })



//app.put('/destination/:destinationID',(request, response)=>{
//    const updatedDestination = data.filter(destination => destination._id === request.params.destination)
//    data.map(destination =>{
//        if(request.params.destinationID === destination._id){
//          Object.assign(destination, updatedDestination);
//         }else{ return destination }
//    })
//    response.send({msg:'updated info', data})
//})

app.post('/destination', (request, response)=>{
    const newDestination = request.body;
    data.push(newDestination);
    response.send({newDestination}); //whatever you want to get back. Can 
})


app.listen(1987,() => {
    console.log('server is running on port' + 1987)
})
