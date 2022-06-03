var skyColor = 'white';

var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];

// 3 no a j variable aca ota change korta
phones[3] = 'walton';

// check oppo not exist in array
if(phones,indexOf('oppo') == -1){
    console.log('Opps! amir khans oppo is missing');
}

// if lg is available
if(phones.indexOf('lg') != -1){
    console.log('LG is available now');
}

// loop
var num =0;
while(num <= 10){
    num++;
}

for(var i = 0; i< phones.length; i++){

}

// function
function addThreeNumbers(number1, number2, number3){
    var total = number1 + number2 + number3;
    return total;
}

addThreeNumbers(81, 41, 56);


// object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: black
}