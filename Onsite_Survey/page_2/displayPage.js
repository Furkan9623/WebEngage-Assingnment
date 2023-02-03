let data = JSON.parse(localStorage.getItem("data"));
console.log(data);

let h1 = document.createElement("h1");
h1.innerText = `Email I'd : ${data.email}`;
h1.setAttribute("id", "h1Tag");
let h2 = document.createElement("h2");
h2.setAttribute("id", "h2Tag");
h2.innerText = `Mob. : ${data.mobile}`;

document.getElementById("display").append(h1, h2);
