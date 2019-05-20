function test(){
    let fireArm = require('figlet');
    fireArm.text('FireArm Shot', {
        font: 'Isometric1',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
    let damage= Math.floor(Math.random() * 300) + 5;
    return(`Damage delt from firearm ${damage}`);
}

test();