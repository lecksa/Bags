import { products } from "./arr.js"
let tovari = document.querySelector('.products')
let cart_ids = []

export function bags(arr, place) {
    place.innerHTML = ''

    let total_sum = document.querySelector('.total_sum')
    let summa = 0
    let num = document.querySelector('.wrap span')
    let dig = +num.innerText

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

        btn.onclick = () => {
            if (cart_ids.includes(product.id)) {
                btn.classList.remove('active')
                btn.innerHTML = 'В избранное'
                dig--
                summa -= product.price
                cart_ids.splice(cart_ids.indexOf(product.id), 1)
            } else {
                btn.classList.add('active')
                btn.innerHTML = 'Добавлено'
                dig++
                summa += product.price
                cart_ids.push(product.id)
            }
            total_sum.innerHTML = summa
            num.innerHTML = dig

            cart(cart_ids, tovari, total_sum, summa, dig, btn, num)
        }
    }
}

export function five(arr, place) {
    let filtered = arr.slice(0, 5)

    bags(filtered, place)
}

function cart(ids, place, sum_pokaz, sum, dig, btn, num) {
    place.innerHTML = ''

    for (let id of ids) {
        const item = products.find(elem => elem.id === id)

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

        img.src = item.image
        h1.innerHTML = item.title
        h2.innerHTML = item.category
        btn_min.innerHTML = '-'
        p.innerHTML = 1
        btn_plus.innerHTML = '+'
        price.innerHTML = +item.price
        span.innerHTML = '$'

        //c
        place.append(prdct)
        prdct.append(img, box, tvr)
        box.append(h1, h2)
        tvr.append(incr, wd)
        incr.append(btn_min, p, btn_plus)
        wd.append(price, span)

        btn_min.onclick = () => {

            if (p.innerHTML <= 0) {
                let indx = cart_ids.indexOf(item.id)
                cart_ids.splice(indx, 1)
                btn.classList.remove('active')
                btn.innerHTML = 'В избранное'
                dig--
                cart(cart_ids, tovari)
            } else if (p.innerHTML > 0) {
                p.innerHTML--
                price.innerText = Math.trunc((price.innerText - item.price) * 100) / 100
                sum = Math.trunc((sum - item.price) * 100) / 100
            }
            num.innerHTML = dig
        }

        btn_plus.onclick = () => {
            p.innerHTML++
            if (p.innerHTML >= 1) {
                price.innerText = Math.trunc((item.price * p.innerText) * 100) / 100
                sum = Math.trunc((sum + item.price) * 100) / 100
            }
        }
        sum_pokaz.innerHTML = sum
    }
}