// var i = 0;
// while (i < 15) {
//     console.log(i);
//     if (i == 5){
//         break;
//     }
//     i++;
// }

// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i > 8) {
//         break;
//     }
// }

var numbers = [54, 35, 21, 98, 23, 101, 45, 67];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if( number > 90) {
//         break;
//     }
// }


// continue korla skip kora kora run hoi
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90){
        continue;
    }
    console.log(number);
}