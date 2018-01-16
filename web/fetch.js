//兼容包
// require('babel-polyfill')
// require('es6-promise').polyfill()
// import 'whatwg-fetch';

fetch('http://192.168.11.178:4000/graphql', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: `
        {
            getDie(numSides: 6) {
            rollOnce
            roll(numRolls: 3)
           }
        }
    `
    
 })
}).then((res) => {
    if (res.ok) {
        res.json().then((data) => {
            console.log(data)
        })
    } else if (res.status == 401) {
        console.log('该页面需要认证，对不起')
    }
}, (error) => {
    console.log({ err: error })
})


