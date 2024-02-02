


export function bags(tab, arr, place) {
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
        tab.append(place)
        place.append(main)
        main.append(img, h1, p, words, btn)
        img.append(bag)
        words.append(item)
        item.append(span_1, h2, span_2, h2_2, span_3, h2_3)

        btn.onclick = () => {
            if (btn.innerHTML === 'В избранное') {
                btn.classList.add('active')
                btn.innerHTML = 'Добавлено'
                dig++
            } else {
                btn.classList.remove('active')
                btn.innerHTML = 'В избранное'
                dig--
            }
            num.innerHTML = dig
        }
    }
}

export function five(tab, arr, place) {
    let filtered = arr.slice(0, 5)

    bags(tab, filtered, place)
}