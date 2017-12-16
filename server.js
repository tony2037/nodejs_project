const express = require('express');
const app = express();
const port = 8787;  //Here is my port
const bodyParser = require('body-parser');
const request = require("request");
var luis_url = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/16d0ac12-bb40-4cb3-b005-d1f5e815a1ce?subscription-key=39b08563df2c4d3a96000d4512378f04&verbose=true&timezoneOffset=0&q=";

app.listen(port , ()=>{
    console.log("Listen on port : " + port);
});

app.use(express.static(__dirname+'/public'));


app.get('/get', function(req, res) {
    res.send(`<h1>Hello use GET METHOD, ${req.query.fname} ${req.query.feedback}</h1>`);
});

//app.configure(function(){ app.use(express.bodyParser()); });
//app.use(express.bodyParser());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/test', (req,res) => {
    res.send(`<h1>Hello use Post METHOD, ${req.body.pfname} ${req.body.pfeedback}</h1>`);
    res.json({ ok: true });
});

function luis_requesting(url=""){
    var res;
    request(url,function(error,response,body){
        res = body;
    });
    console.log(res);
    return res;
};

app.get("/reserve",(req,res) =>{
    var message = req.query.message;
    console.log(typeof(message));
    var request_url = luis_url + message;
    console.log(request_url);
    //console.log(luis_requesting("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/f471fcf8-2700-4e3d-a6ef-2d37e35e18db?subscription-key=39b08563df2c4d3a96000d4512378f04&timezoneOffset=0&verbose=true&q=下星期有空嗎?"));
    let topScoringIntent = "";
    request(request_url, {json:true} , function(error, response, body) {
        if(error){
        console.log(error);
        res.send("error");
        }
        else{
            console.log(body);
            topScoringIntent = body.topScoringIntent.intent;
            console.log(topScoringIntent);
            res.send(`>Hello I have received Your ${topScoringIntent} : ${message}`);
        }
      });
      //console.log(typeof(topScoringIntent));
    //res.send(`<h3>Hello I have received Your ${topScoringIntent}</h3>`);
});
