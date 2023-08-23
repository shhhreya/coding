//.then - Promises
//asynchronous programming
//Previous programming were synchronous 

 const dogss = document.getElementById('dogss')
const dogImageDiv = document.getElementById('dogImage')
//fetching Api request
//stuff you have to wait for
const generate = () => {
fetch('https://dog.ceo/api/breeds/image/random')
//whenever we have to fetch we use two .then
//json is an object with two keys message and status
//turn the data into json
.then(response => response.json())
//log json
.then(json => {
    //console.log(json.message)
    dogImageDiv.innerHTML= `<img src="${json.message}" height=300px width=300px/>`
     })
    }
dogss.onclick = () => generate()