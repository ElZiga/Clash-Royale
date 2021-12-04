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

    <div class = "item">
    <h1>${products[1].name} </h1>
    <img    width="250px;" src='${products[1].photo_url}'>
    </div>

    <div class = "item">
    <h1>${products[2].name} </h1>
    <img width="250px;" src='${products[2].photo_url}'>
    </div>

    <div class = "item">
    <h1>${products[3].name} </h1>
    <img width="250px;" src='${products[3].photo_url}'>
    </div>

    <div class = "item">
    <h1>${products[4].name} </h1>
    <img width="250px;" src='${products[4].photo_url}'>
    </div>

    <div class = "item">
    <h1>${products[5].name} </h1>
    <img width="250px;" src='${products[5].photo_url}'>
    </div>
    `
}