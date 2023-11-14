let express = require("express")
let app = express ();
let path = require("path");
app.listen(4000, () => console.log("puerto 4000"));


app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "/views/home.html"))
});


app.get("/tv", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/tv-samsung.html"))
});

app.get("/home", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.use(express.static("public"));