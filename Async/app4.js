// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('You clicked me!')
// })

//////////////////////////////////////////////////////////////

const button = document.querySelector('button')

const alertMe = () => {
    console.log('You clicked me!')
}

// funciton alertMe () {
//     console.log('You clicked me!')
// }

button.addEventListener('click', alertMe)