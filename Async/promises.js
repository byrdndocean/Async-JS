const flag = document.createElement('img')
document.body.appendChild(flag)

console.log('Lets go!')

fetch('https://restcountries.com/v3.1/all')
.then(response => {
    return response.json()
}).then(json => {
    // let countries = json 
    flag.src = json[0].flags.png
    console.log('Flag added')
}).catch(err => {
    console.log('errors:' + err.message)
})

console.log('Done!')

// let response = fetch('https://restcountries.com/v3.1/all')
// console.log(response)