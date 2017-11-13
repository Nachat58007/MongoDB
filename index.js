

var express = require('express');
var app = express();
var user = require('./user.js');


app.get ('/user',user.getal);
app.get ('/user/search',user.getf);
app.get ('/user/role/:role',user.getr);
app.get ('/user/expired',user.gete);
app.get ('/user/gender/female',user.getg);
app.get ('/user/gender/male',user.getgm);


app.listen(3000,function(){
console.log();
});
  

