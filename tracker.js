var request = require ('request');

var services = {

    getData(country,callback) {
       request (`https://api.covid19api.com/total/country/${country}`,(err,res)=>{
    if (err) throw err;
    var data = JSON.parse(res.body);
    callback(data[data.length-1])

})

    }

}

module.exports=services;