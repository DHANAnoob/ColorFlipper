let button = document.getElementById('button')
const flipper = document.querySelector('.flip')
const box = document.querySelector('.box')
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

function randomhex() {
    let hexind = Math.floor(Math.random() * 16)
    return hex[hexind]
}

button.addEventListener('click',
    function () {
        let hexcolor = '#'
        for (i = 1; i <= 6; i++) {
            hexcolor += randomhex()
        }
        // console.log(hexcolor)
        box.style.backgroundColor = hexcolor
        flipper.innerHTML = hexcolor
    }
)
