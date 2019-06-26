const express = require("express");
//const data = require("./database");
const destinationRouter = express.Router();
const Destination = require("./models/Destination");


destinationRouter.route("/")

    .post((request, response)=> {
        const newbounty = new Destination(request.body);
        newbounty.save((err,new_destination) =>{
            if(err) return response.status(500).send(err)
            return response.send(new_destination)
        })
       // newbounty._id = uuid();
        // data.push(newbounty);
        // response.send(newbounty);
    })

    .get((request, response) => {
        Destination.find((err,destination) =>{
            if(err){
                return response.status(500).send(err)
            }return response.status(200).send(destination)
        })
  
    })


destinationRouter.route("/:id")

.get((request,response)=>{
    Destination.findById(request.params.id, (err,destination) =>{
        if(err){
            return response.status(500).send(err);
        }return response.status(200).send(destination)
    })
})

    .delete((request, response)=> {
        Destination.findByIdAndDelete(request.params.id, (err) => {
            if(err){
                return response.status(500).send(err);
            }return response.status(200).send('Successfully Deleted Destination')
        })


        // data.forEach((bounty, i) => {
        //     if(request.params.bountyID === bounty._id){
        //         data.splice(i, 1);
        //     }
        // })
        // response.send({
        //     msg: 'Successfully Deleted bounty'
        // })
    })

    .put((request, response) => {

        Destination.findByIdAndUpdate(request.params.id, request.body, {new:true}, (err,destination) =>{
            if(err){
                return response.status(500).send(err);
            }return response.status(201).send(destination);
        })

        // const updatedbounty = request.body;
        // data.forEach(bounty => {
        //     if(request.params.bountyID === bounty._id){
        //         return Object.assign(bounty, updatedbounty);
        //     }
        // })  
        // response.send({
        //     msg: 'Successfully Updated bounty',
        //     data
        // });
    });

module.exports = destinationRouter;