

const superHeroDiv=document.getElementById('superHero')
//const heroo=document.getElementById('heroo')
const imageDiv= document.getElementById("superHero")

const SUPERHERO_TOKEN = '2516678318513173'
const BASE_URL= `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const generate = (id, name) => {
   // const superHero = document.getElementById('superHero')
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        imageDiv.innerHTML += `<img src="${json.image.url}" height=200 width=200/>`
    })
}

generate(245)