// First Name
// Last Name
// Living (Boolean)
// Bounty Amount (number)
// Type (‘Sith’ or ‘Jedi’)
// ID (a unique identifier. Use the uuid package to generate unique ids. - npm install uuid 
//     and check the docs to see how to use it. It's as simple as requiring the package and 
//     running uuid.v4())
const uuidv4 = require('uuid/v4');

module.exports = [
    {
        fname:"Ozhetu",
        lanme:"Caquo",
        living: true,
        bounty: 400,
        type:"Sith",
        id:uuidv4()
    },
    {
        fname:"Umaencuasy",
        lname:"Gritbo",
        living:true,
        bounty:20,
        type:"Jedi",
        id:uuidv4()
    }

]