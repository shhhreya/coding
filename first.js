//prompt vaneko chai user input lina

/*fruit = prompt('What is your favourite fruit?');
console.log(fruit);
alert(fruit);

//Number use garnu ko reason chai hami sanga return aako value string ma hunxa

food=Number(prompt('How much was the food?'));
tipPercentage=Number(prompt('percent you want to tip based on food')/100);
tipAmount= food*tipPercentage;
console.log(tipAmount);

//alert vaneko chai value dekhauna lai alert box ma 
alert(tipAmount);

//directly plus garda concatenate garxa

totalAmount= food + tipAmount ;
alert(totalAmount);

/*datatypes (string,numbers)
numbers 1,2,3,4,5...
strings 'hello','hi' etc
arrays []
objects {}
boolean true/false

#Math method
floor-Math.floor() method rounds the number down to the nearest integer, and returns the result.

ceil-Math.ceil() method round the number to the nearest integer and returns the result.

random-Math.random() method returns a random number between 0(inclusive) and 1 (exclusive)
Math.ranodm()*3 gives all random values between 0 and 3
*/

/*let weather = 'rain';
if (weather == 'rain'){
    console.log('Grab your Umbrella ☔');
}
if(weather == 'sunny'){
    console.log('Grab your Sunglasses 😎');
}*/
/*let weather = 'rain';
if (true){
    console.log('Grab your Umbrella ☔');
}
else {
    console.log('Grab your Sunglasses 😎')
}*/

/*let weather = prompt("How's the weather outside?")

if(weather == 'rainy'){
    console.log('Grab your Umbrella')
} else{
    console.log('Grab your sunglasses')
}
//conditional operators
// ==,===,>,<,<=,>=,!=,!==
//condtional are used in statements to comapre variables values and/or data types.
//they always return boolean- true or false

//Functions
/*function sayMyName(){
    console.log('Shreya')
    console.log('Komal')
    //function vitra jati pani code xa call garda sapai run hunxa
}
sayMyName(); yesto garda chai console ma gara function lai call garna parxa to see the output*/ 

//Or It can also be done as
function sayMyName(name){
    console.log(name)
}
//sayMyName('Shreya');

function greeting(name){
    greet= 'Hi' + name + 'Its me .How you doin?' 
    console.log('Hi name,Its me .How you doin?')
}
greeting('Shreya');