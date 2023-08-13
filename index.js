//prompt vaneko chai user input lina
fruit = prompt('What is your favourite fruit?');
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





