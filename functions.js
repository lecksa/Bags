import { products } from "./arr.js"
import { box } from "./script.js"
let tovari = document.querySelector('.products')
let cart_ids = []
let total_sum = document.querySelector('.total_sum')

export function bags(arr, place) {
    place.innerHTML = ''

    let num = document.querySelector('.wrap span')
    let dig = 0

    for (let product of arr) {
        //a
        let main = document.createElement('div')
        let img = document.createElement('div')
        let bag = document.createElement('img')
        let h1 = document.createElement('h1')
        let words = document.createElement('div')
        let item = document.createElement('div')
        let p = document.createElement('p')
        let span_1 = document.createElement('div')
        let span_2 = document.createElement('div')
        let span_3 = document.createElement('div')
        let h2 = document.createElement('h2')
        let h2_2 = document.createElement('h2')
        let h2_3 = document.createElement('h2')
        let btn = document.createElement('button')

        //b
        place.classList.add('box')
        main.classList.add('main')
        img.classList.add('img')
        span_1.classList.add('span')
        span_2.classList.add('span_2')
        span_3.classList.add('span_3')
        h2_2.classList.add('h2')
        h2_3.classList.add('h2')
        item.classList.add('item')
        words.classList.add('words')

        bag.src = product.image
        h1.innerHTML = product.category
        p.innerHTML = product.description
        h2.innerHTML = product.price
        h2_2.innerHTML = product.rating.rate
        h2_3.innerHTML = product.rating.count
        btn.innerHTML = 'В избранное'

        //c
        place.append(main)
        main.append(img, h1, p, words, btn)
        img.append(bag)
        words.append(item)
        item.append(span_1, h2, span_2, h2_2, span_3, h2_3)

        if (cart_ids.includes(product.id)) {
            btn.innerHTML = 'Добавлено'
            btn.classList.add('active')
        }

        btn.onclick = () => {
            if (cart_ids.includes(product.id)) {
                btn.classList.remove('active')
                btn.innerHTML = 'В избранное'
                dig--
                cart_ids.splice(cart_ids.indexOf(product.id), 1)
                num.innerHTML = dig
            } else {
                btn.classList.add('active')
                btn.innerHTML = 'Добавлено'
                dig++
                cart_ids.push(product.id)
                num.innerHTML = dig
            }

            cart(cart_ids, tovari)
        }
    }
}

export function five(arr, place) {
    let filtered = arr.slice(0, 5)

    bags(filtered, place)
}

function cart(ids, place) {
    place.innerHTML = ''
    total_sum.innerHTML = 0
    let total = 0

    for (let id of ids) {
        const item = products.find(elem => elem.id === id)
        let count_num = 1
        total += item.price
        total_sum.innerHTML = total

        //a
        let prdct = document.createElement('div')
        let img = document.createElement('img')
        let box_2 = document.createElement('div')
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
        let btn_delete = document.createElement('button')

        //b
        prdct.classList.add('product')
        box_2.classList.add('box')
        tvr.classList.add('tovar')
        incr.classList.add('incr')
        btn_min.classList.add('minus')
        btn_plus.classList.add('plus')
        wd.classList.add('wd')
        btn_delete.classList.add('btn_delete')

        img.src = item.image
        h1.innerHTML = item.title
        h2.innerHTML = item.category
        btn_min.innerHTML = '-'
        p.innerHTML = count_num
        btn_plus.innerHTML = '+'
        price.innerHTML = +item.price
        span.innerHTML = '$'
        btn_delete.innerHTML = "Удалить"

        //c
        place.append(prdct)
        prdct.append(img, box_2, tvr)
        box_2.append(h1, h2)
        tvr.append(incr, wd)
        incr.append(btn_min, p, btn_plus)
        wd.append(price, span, btn_delete)

        btn_delete.onclick = () => {
            cart_ids.splice(cart_ids.indexOf(id), 1)
            prdct.remove()
            let totalForMinus = item.price * count_num
            total = parseFloat((total - totalForMinus).toFixed(2))
            total_sum.innerHTML = total

            bags(products, box)
        }

        btn_min.onclick = () => {
            if (count_num > 1) {
                p.innerHTML = --count_num
                price.innerHTML = (item.price * count_num).toFixed(2)
                total = parseFloat((total - item.price).toFixed(2))
                total_sum.innerHTML = total
            }
        }

        btn_plus.onclick = () => {
            if (count_num < item.rating.count) {
                p.innerHTML = ++count_num
                price.innerHTML = (item.price * count_num).toFixed(2)
                total = parseFloat((total + item.price).toFixed(2))
                total_sum.innerHTML = total
            }
        }
    }
}