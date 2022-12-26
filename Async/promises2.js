// Promise
getProfile()
.then(getUser)
.then(getName)
.then(() => console.log('done'))
.catch((e) => console.log(err))


// Callback
getProfile((profile) => {
    getUser(country, (user) => {
        getName(user, (name) => {
            
        })
    })
})