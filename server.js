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
        scores: [1, 4, 2, 1, 5, 2, 4, 3, 1, 2]
    },
    {
        name: "Dorian",
        photo: "/",
        scores: [5, 1, 4, 3, 5, 4, 3, 2, 2, 5]
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

    var results = [];

    function frndfndr(arr1, arr2) {
        var difference = 0
        for (var i = 0; i < arr1.length; i++) {
            difference += Math.abs(arr1[i] - arr2[i]);
        }
        results.push(difference);
    }

    for (var i = 1; i < friends.length; i++) {
        frndfndr(friends[0].scores, friends[i].scores);
    }

    var resultMin = Math.min.apply(null, results);

    // adding 1 to the matchIndex to account for the new data being at index 0
    var matchIndex = results.indexOf(resultMin) + 1;

    return res.json(friends[matchIndex]);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});