function togglemenu() {
    document.querySelector('.list').classList.toggle('listactive')
    document.querySelector('.burger').classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', togglemenu)