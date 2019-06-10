const express = require("express");
const app = express();
const data = require('./database');

// GETs a list of all bounties
// POSTs new bounties,
// DELETEs a bounty
// PUTs (updates) a bounty

app.get('/bounty', (req, res) => {
    res.send(data);
});

app.post('/bounty', (request, response)=>{
    const newBounty = request.body;
    data.push(newBounty);
    response.send({newBounty}); //whatever you want to get back. Can 
});

app.delete('/bounty/:bountyID', (request, response) =>{
    console.log(request.params);
    const results = data.filter(bountyID => bounty._id !== request.params.bountyID)
    response.send(results);
});

app.put('/bounty/:bountyID',(request, response)=>{
   const updatedbounty = data.filter(bounty => bounty._id === request.params.bounty);

   data.map(bounty =>{
       if(request.params.bountyID === bounty._id){
         Object.assign(bounty, updatedbounty);
       }else{ 
           return bounty 
       }
   })
   response.send({msg:'updated info', data})
});

app.listen(1983, () => {
    console.log("App is listening on port 3000!");
});