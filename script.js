const arr = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'aqua', 'indigo', "brown", 'black']

function rand() {
    let i = Math.floor(Math.random() * arr.length)
    return arr[i]
}

const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
}

cards.forEach(card => {
    console.log(card);
    card.addEventListener('click', () => {
        cards.forEach(luboy => {
            luboy.classList.remove('active')
        })
        card.style.background = rand()
        card.classList.add('active', rand())
    })
})