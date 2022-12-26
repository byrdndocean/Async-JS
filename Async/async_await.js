// async function print() {
//     return "I have been printed"
// }

// print()

//////////////////////////////////////////////
// const print = async () => {
//     return "I have been printed"
// }

// print().then(response => console.log(response))

/////////////////////////////////////////////////////

// fetch('https://restcountries.com/v3.1/all')
// .then(response => {
//     return response.json()
// }).then(json => {
//     // let countries = json 
//     flag.src = json[0].flags.png
//     console.log('Flag added')
// }).catch(err => {
//     console.log('errors:' + err.message)
// })

/////////////////////////////////////////////////////////

async function getData() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    return data
}

getData().then(data => console.log(data))
    .catch(err => console.log('errors: ' + err.message))