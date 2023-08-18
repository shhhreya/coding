//Higher order function
 // array sorting
  numbers=[0,1,2,4,5,8,9,66,44,5,3334]
  numbers.sort()
 //console.log(numbers)
 

//map-it loops and returns an array(returns exact thing)
//filter-loops and returns an array with matching conditions
//reduce


//MAP
//number lai log garxa
//[1, 2, 3, 4].map(number => console.log(number))

//double the number 
//let result = [1, 2, 3, 4].map(number => number ** 2 ) 
//console.log(result)

//function banara 
//const doubleMap = (numbers) => {
  //  return numbers.map(number => number *2)
//}
//console.log(doubleMap([1, 2, 3, 4]))

//filter([1, 2, 3, 4, 5, 6]) ➡️ [4, 5, 6]
const filter=(numbers,greaterThan)=>{
  //let result=[]
  //in huda index number log garxa
  for(const number in numbers){
    //of huda content log garxa
    //for(const number in numbers){
    if(number>greaterThan){
   //   result.push(number)
    }
  }
 // return result
}
//console.log(filter([1,2,3,4,5,6],3))
//[1, 2, 3, 4, 5, 6]
 //const nums = [1, 2, 3, 4, 5, 6]
 //console.log(nums.filter(num => num > 2))
 //OR statement needs to match one of the cndition for output
 //console.log(nums.filter(num => num > 4 || num<  2))

 rsult=[1,2,3,4].filter(number=>number>2) //for condition
 
 console.log(rsult)



 //array of objects
 const actors=[
   {name: 'Priyanka', netWorth: 10},
   {name: 'Salon', netWorth:5},
   {name: 'Swastima', netWorth:10},
   {name: 'Barsa', netWorth:4},
   {name: 'Dayahyang', netWorth:9}
 ]
 //let result = (actors.filter(actor => actor.netWorth>40000))
 //console.log(result)
 //splice turns it into an array 
//join will actually join and turns into an string
//join(" ") or join(' ,')
 //let names = result.map(actor => actor.name).join()

 //console.log(actors.reduce((a,b)=> a*b.netWorth,1)) //ouput=18000
 console.log(actors.reduce((a,b)=> a+b.netWorth,0))//output=38
 //&& needs to match both the condition i.e must be true forit to log 
 //console.log(nums.filter(num => num > 4 && num<  2))


 //HELP NEEDED I DUNNOHOW TO USE INNER.HTML
//arraymethods.innerHTML = `<h1>${names}</h1>`


//REDUCE - sum of all net worths 
//reduce takes in a function as an argument
//reduce loops and gives back the accumulator(collector)
/*const nums = [1, 2, 3]
const result = nums.reduce(function(prev,next){
 return prev + next
  //console.log(prev) ➡️ 1 undefined
  //console.log(prev,next) ➡️ 1 2 
  //console.log(next) ➡️ 2 3 
})
console.log(result) */ //output= 6

//Es6 notation to make it simpler 
//const nums = [1, 2, 3]
//reduce le leko euta argument function ho ani arko vaneko number ho 
//const result = nums.reduce((prev,next)=> prev+next)
//console.log(result)

function sum(a,b){
 return a+b
}
const nums = [1, 2, 3]
const result = nums.reduce(sum)
//console.log(result)
