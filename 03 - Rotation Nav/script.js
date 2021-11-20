const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document. querySelector('.container')

open.addEventListener('click', () => container.classList.add
('show-nav'))

CLOSE.addEventListener('click', () => container.classList.remove
('show-nav'))

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}