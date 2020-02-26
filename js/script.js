function togglemenu() {
    document.querySelector('.burgerlist').classList.toggle('listactive')
    document.querySelector('.burger').classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', togglemenu)