const express = require("express")
//we are using body parser to get informations from user
const bodyParser = require("body-parser")

const app = express()
//this bodyParser command allows us to receieve/edit the post request from the user
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmiCalculator",(req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator",(req,res)=>{
    var n1 = Number(req.body.n1)
    var n2 = Number(req.body.n2)
    var result = n1 + n2
    res.send("Your BMI is " + result)
})

app.get("/",(req,res)=>{
    // res.send("Hello world")
    //we are now sending html files
    // res.sendFile("index.html")
    // but when we host it in a server, we dont know the path of the file stored..
    // we use __dirname to get the current working directory in js
    res.sendFile(__dirname + "/index.html")
})
// this will receieve "post" request from the client..
app.post("/",(req,res)=>{
    // res.send("Hello your calc is broken")
    //gets the value of num1
    // res.send(req.body.num1)
    // res.send(req.body.num2)
    //req.body.num1 and the other is string form, converting it to integer
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2

    res.send("The result is" + result)

})

app.listen(3000)