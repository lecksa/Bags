import { products } from "./arr.js"
import { bags, five} from "./functions.js"

let body = document.body
export let box = document.createElement('div')
let just = document.querySelector('#just')
let all = document.querySelector('#all')
let open = document.querySelector('#open')
let menu = document.querySelector('.menu')
let close = document.querySelector('#close')

body.append(box)

just.onclick = () => {
    five(products, box)
}

all.onclick = () => {
    bags(products, box)
}

open.onclick = () => {
    menu.style.right = "0"
}

close.onclick = () => {
    menu.style.right = "-100%"
}

bags(products, box)