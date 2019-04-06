person1 = [2, 2, 3, 4];

person2 = [2, 4, 3, 1];

function frndfndr(arr1, arr2) {
    var sum = 0
    for (var i = 0; i < arr1.length; i++) {
        sum += Math.abs(arr1[i] - arr2[i]);
    }
    return sum;
}

console.log(frndfndr(person1, person2));