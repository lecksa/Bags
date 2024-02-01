let body = document.body
let box = document.createElement('div')
let num = document.querySelector('.wrap span')

let dig = 0

bags()

function bags() {

    for (let i = 0; i < 7; i++) {
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
        box.classList.add('box')
        main.classList.add('main')
        img.classList.add('img')
        h1.classList.add('h1')
        span_1.classList.add('span')
        span_2.classList.add('span_2')
        span_3.classList.add('span_3')
        h2.classList.add('h2')
        h2_2.classList.add('h2')
        h2_3.classList.add('h2')
        item.classList.add('item')
        words.classList.add('words')
        btn.classList.add('button')

        bag.src = './img/bag.svg'
        h1.innerHTML = 'Mens clothing (120)'
        p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
        h2.innerHTML = '109'
        h2_2.innerHTML = '3,9'
        h2_3.innerHTML = '120'
        btn.innerHTML = 'В избранное'

        //c
        body.append(box)
        box.append(main)
        main.append(img, h1, p, words, btn)
        img.append(bag)
        words.append(item)
        item.append(span_1, h2, span_2, h2_2, span_3, h2_3)

        btn.onclick = () => {
            if (btn.innerHTML === 'В избранное') {
                btn.classList.add('active')
                btn.innerHTML = 'Добавлено'
                dig++
            }else{
                btn.classList.remove('active')
                btn.innerHTML = 'В избранное'
                dig--
            }
            num.innerHTML = dig
        }
    }
}