const randomFruit =(fruits) => {
const randomNum =Math.floor(Math.random()*fruits.length)

//console.log(randomNum)
return fruits[randomNum]
}
let fruits = ['🍇','🍉','🍐','🍍','🍎','🍑']
//console.log(fruits[0])
//console.log(randomFruit(fruits))

//if else if else 
//rainy(1),sunny(-1),overcast(0)

//one parameter
/*const weatherScore = (weather) => {
    if (weather === 'rainy'){
        score=1
    } else if (weather === 'sunny' ) {
        score = -1
    } else {
        score=0
    }
    return score
}
console.log(weatherScore('rainy'))*/

//2 parameters
//order matters in if else if statement
const weatherScore =(weather,weather1) => {
    if (weather == 'rainy' && weather1 == 'overcast') {
    score=2
    }else if (weather == 'sunny' && weather1 == 'overcast'){
        score=1
    }else{
        score=0
    }
    return score
}
//console.log(weatherScore('overcast','rainy')) //output➡️0
console.log(weatherScore('rainy','overcast')) //output➡️2