var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var friends = [{
        name: "Desquarian",
        photo: "/",
        scores: [3, 2, 5, 1, 4, 2, 3, 1, 1, 4]
    },
    {
        name: "Gnocturne",
        photo: "/",
        scores: [1, 4, 2, 1, 5, 2, 3, 3, 1, 4]
    }
];

// Get routes:

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Post route:

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    // using unshift to ensure that the newly added info is at index 0
    friends.unshift(newFriend);

    var results = []

    for (var i = 1; i < friends.length; i++){
        scores.push(friends[i].scores);
    }
    console.log("DB scores: " + scores);
    console.log("");
    console.log("New name: " + friends[0].name);
    console.log("New scores: " + friends[0].scores);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});