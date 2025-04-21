// document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target); // Create FormData object
//     const data = Object.fromEntries(formData.entries()); // Convert to a plain object
//     console.log(data); // { username: "value", password: "value" }
//     // const username = {
//     //     name: document.getElementById("name").value,
//     //     email: document.getElementById("email").value,
//     //     subject: document.getElementById("subject").value,
//     //     message: document.getElementById("message").value
//     // }
//     fetch("https://bcb5-2409-4085-2d9b-bad4-d358-53da-1db3-b43d.ngrok-free.app/contact", {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// })



// const table = document.getElementById("tbody")
// fetch("https://bcb5-2409-4085-2d9b-bad4-d358-53da-1db3-b43d.ngrok-free.app/contact", {
//     method: "PUT",
//     headers: {
//         "content-type": "application/json"
//     },
// }).then(res => res.json())
//     .then(res => {
//         res.forEach(element => {
//             table.insertAdjacentHTML("beforeend", `<td>${element.id}</td>
//                 <td>${element.name}</td>
//                 <td>${element.email}</td>
//                 <td>${element.subject}</td>
//                 <td>${element.message}</td>
//                 <td><button>delete</button></td>
//                 `)
//         });
//     })
//     .catch(err => {
//         console.log(err)
//     })




// const table = document.getElementById("tbody")
// fetch("https://bcb5-2409-4085-2d9b-bad4-d358-53da-1db3-b43d.ngrok-free.app/contact", {
//     method: "delete",
//     headers: {
//         "content-type": "application/json"
//     },
// }).then(res => res.json())
//     .then(res => {
//         res.forEach(element => {
//             table.insertAdjacentHTML("beforeend", `<td>${element.id}</td>
//                 <td>${element.name}</td>
//                 <td>${element.email}</td>
//                 <td>${element.subject}</td>
//                 <td>${element.message}</td>
//                 <td><button>delete</button></td>
//                 `)
//         });
//         deleteFun()
//     })
//     .catch(err => {
//         console.log(err)
//     })