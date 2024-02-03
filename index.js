import { products } from "./arr.js"
import { bags } from "./functions.js"
import { five } from "./functions.js"

let body = document.body
let box = document.createElement('div')
let just = document.querySelector('#just')
let all = document.querySelector('#all')
let open = document.querySelector('#open')
let menu = document.querySelector('.menu')
let close = document.querySelector('#close')

let tovari = document.querySelector('.products')

for (let tovar of products) {
    //a
    let prdct = document.createElement('div')
    let img = document.createElement('img')
    let box = document.createElement('div')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let tvr = document.createElement('div')
    let incr = document.createElement('div')
    let btn_min = document.createElement('button')
    let p = document.createElement('p')
    let btn_plus = document.createElement('button')
    let wd = document.createElement('div')
    let price = document.createElement('p')
    let span = document.createElement('span')

    //b
    prdct.classList.add('product')
    box.classList.add('box')
    tvr.classList.add('tovar')
    incr.classList.add('incr')
    btn_min.classList.add('minus')
    btn_plus.classList.add('plus')
    wd.classList.add('wd')

    img.src = tovar.image
    h1.innerHTML = tovar.title
    h2.innerHTML = tovar.category
    btn_min.innerHTML = '-'
    p.innerHTML = 0
    btn_plus.innerHTML = '+'
    price.innerHTML = +tovar.price
    span.innerHTML = '$'

    //c
    tovari.append(prdct)
    prdct.append(img, box, tvr)
    box.append(h1, h2)
    tvr.append(incr, wd)
    incr.append(btn_min, p, btn_plus)
    wd.append(price, span)

    // if(p.innerHTML === 1 || p.innerHTML === 0){
    //     price.innerHTML = tovar.price
    // }

    btn_min.onclick = () => {
        if (p.innerHTML > 0) {
            p.innerHTML--
            price.innerText = Math.trunc((price.innerText - tovar.price) * 100) / 100
        }
    }

    btn_plus.onclick = () => {
        p.innerHTML++
        if (p.innerHTML >= 1) {
            price.innerText = Math.trunc((tovar.price * p.innerText) * 100) / 100
        }
    }

}

bags(body, products, box)

just.onclick = () => {
    five(body, products, box)
}

all.onclick = () => {
    bags(body, products, box)
}

open.onclick = () => {
    menu.style.right = "0"
}

close.onclick = () => {
    menu.style.right = "-100%"
}