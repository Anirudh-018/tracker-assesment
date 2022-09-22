// window.onload () => { = randomUserGenerator()
// }
// const randomUserGenerator () => = => { fetch('https://randomuser.me/api')
// .then((response) => {
// return response.json()
// }).then((data) => > { console.log(data)
//     showData(data)
// })
// }
// showData = (randomUser) => {
//     document.getElementById('name').innerText =
//     ${randomUser.results[0].name.title}
//     ${randomUser.results[0].name.first}
//     ${randomUser.results[0].name.last}`
//     document.getElementById('age').innerText = `${randomUser.results[0].dob.age}`
//     document.getElementById('email').innerText =`${randomUser.results[0].email}` 
//     document.getElementById('phone').innerText = `${randomUser.results[0].phone}` 
// }


function onLoad() {
    fetch('https://randomuser.me/api')
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data.results[0].name.first);
                    // showData(data)
                })
        })
    }

    onLoad();