let item = document.getElementById('grid')
let xhr = new XMLHttpRequest;
let url = 'https://my-json-server.typicode.com/ElZiga/Clash-Royale';
xhr.open("GET", url+ "/products/")

xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
    let products = xhr.response
    item.innerHTML = `
    <div class = "item">
    <h1>${products[0].name} </h1>
    <img width="250px;" src='${products[0].photo_url}'>
    </div>
    `
}