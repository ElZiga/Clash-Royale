let xhr = new XMLHttpRequest;
let url = 'https://github.com/ElZiga/Clash-Royale/blob/[main|master]/db.json';
xhr.open("GET", url+ "/products/")

xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
    let products = xhr.response
    console.log(products)
}