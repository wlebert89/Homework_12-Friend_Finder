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

var newFriend = {
    name: "Chad",
    photo: "/",
    scores: [1, 4, 2, 1, 5, 2, 3, 3, 1, 4]
}

var results = [];

function frndfndr(newArray, allArrays) {
    var difference = 0
    for (var i = 0; i < newArray.length; i++) {
        sum += Math.abs(newArray[i] - allArrays[i]);
    }
    results.push(difference);
}

for (var i = 0; i < friends.length; i++){
    frndfndr(newFriend.scores, friends[i].scores);
}

var resultMin = Math.min.apply(null, results);

var matchIndex = results.indexOf(resultMin);

console.log(friends[matchIndex].name);
