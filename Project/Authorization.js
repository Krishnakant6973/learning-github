document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Create FormData object
    const data = Object.fromEntries(formData.entries()); // Convert to a plain object
    console.log(data); // { username: "value", password: "value" }

    fetch("https://d91f-157-38-245-63.ngrok-free.app/authenticate", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(res.status)
            if (!res.ok) {
                throw new Error("Authentication failed");
            }
            return res.json();
        })
        .then(res => {
            localStorage.setItem("user",JSON.stringify(res))
            console.log(res);
            
            if (res.id) { // Assuming the API returns { success: true } for successful login
                window.location.href =`${window.origin+"/Project/createProduct.html"}`; // Redirect to the desired URL
            } else {
                alert("Invalid details! Please try again."); // Handle invalid login
            }
        })
        .catch(err => {
            console.error("Error:", err);
            alert("An error occurred during authentication.");
        });
});
// let userData = localStorage.getItem("user");
// if(userData?.id){
//     window.location.href =`${window.origin+"/Project/createProduct.html"}`;
// }else{
//   window.location.href =`${window.origin+"/Project/Login.html"}`;
// }
