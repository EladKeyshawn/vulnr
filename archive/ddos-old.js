const _ = require('lodash');


const IpMonitor = {
    "::ffff:10.100.102.6": {
        count: 0,
    }
};

const intervalSet = false;

let interval;

function startDDOSMeasure() {

    if(!interval) {
        interval = setInterval(() => {
            console.log(IpMonitor);
            _.map(IpMonitor, (value, key) => {
                IpMonitor[key].count = 0;
            });

            console.log(IpMonitor);


        }, 1500);
    }

    setTimeout(stopDDOSMeasure,100000);
}


function stopDDOSMeasure() {
    clearInterval(interval);
}


module.exports = (req, res) => {
    const ip = req.ip;

    startDDOSMeasure();

    if(IpMonitor[ip]) {
        IpMonitor[ip].count += 1;

        const attackers = _.filter(IpMonitor, (value,key) => value.count > 10);
        if( attackers.length > 1) {
            // TODO: Return password of level of with more nice congrats
            res.send("Congrats");
        }
    } else {
        IpMonitor[ip] = {count:0}
    }

    res.end();
};