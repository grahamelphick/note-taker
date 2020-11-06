var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

var allNotes = require("./Develop/db/db.json")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.get("/api/notes", function (req, res) {
    // document.getElementById("allNotesList").appendChild(data);
    // return res.json(allNotes);
    res.sendFile(path.join(__dirname, "/Develop/db/db.json"));
    console.log(allNotes)
});

// app.post("/api/notes", function(req, res) {
//     allNotes.push(req.body)
    
//   });



// fetch(allNotes)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         document.getElementById("allNotesList").appendChild(data)
//         // appendData(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// function appendData(data) {

// }

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});