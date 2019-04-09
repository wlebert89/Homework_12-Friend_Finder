var friends = require("../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

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
}