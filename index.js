import { products } from "./arr.js"
import { bags } from "./functions.js"
import { five } from "./functions.js"

let body = document.body
let box = document.createElement('div')
let just = document.querySelector('#just')
let all = document.querySelector('#all')

bags(body, products, box)

just.onclick = () => {
    five(body, products, box)
}

all.onclick = () => {
    bags(body, products, box)
}