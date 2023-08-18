//sum of array
/*const sumArray1 = (numberss) => {
    let result=0;
  for(const num of numberss){
    result += num
  }
  return result;
}
const numb =[1,2,3]
console.log(sumArray(numb))*/


//generating random value
math= Math.floor(Math.random()*8)
console.log(math)


//Convert hour to second
/*const hourToSecond =(hours) => {
  console.log(hours)
let second = (hours * 60) * 60
return {second}
}
const userInput = prompt("Convert hour to second")
console.log(hourToSecond(userInput))*/

//lettercounter
/*const letterCounter = (phrase) => {
    return {
        result: phrase.length
    }
}
   const phrase = prompt("Write your phrase.")
console.log(letterCounter(phrase))*/


/*function calculateFood(food, tipPer){
//food=food
tipPercentage= tipPer/100;
tipAmount= food * tipPercentage;

total = sum(food, tipAmount ) ;
return total;
}
console.log(calculateFood(100, 20));*/


//multiplication of numbers in an array
const nums=[1, 2, 3, 4, 5]
//const result = nums.reduce((a,b) => a * b , 10) //ouput= 1200
const result = nums.reduce((a,b) => a * b) //ouput=120
console.log(result)

     //letter count
     const wordfrequency=(word)=>{
      let frequency={}
      rate =word.split(' ')
      for(const world of rate){
        console.log(world)
        if (world in frequency){
          frequency[world]++
        }else{
          frequency[world]=1
        }
      }
      console.log(rate)
      return frequency
    }
    //const userinput=prompt('write your sentence.')
    console.log(wordfrequency('haha how you doing'))