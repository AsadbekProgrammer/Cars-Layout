// javascript

let menu = document.getElementById('menu');
let modal = document.getElementById('modal')
let like = document.getElementById('like')


menu.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('open')
})

document.addEventListener('click', function(e) {
    
    if (!modal.contains(e.target) && e.target !== menu) {
        modal.classList.remove('open');
    }
     if (e.target.classList.contains('unlike')) {
        e.preventDefault();
        e.target.classList.remove('unlike');
        e.target.classList.add('like');
    } else if (e.target.classList.contains('like')) {
        e.preventDefault();
        e.target.classList.remove('like');
        e.target.classList.add('unlike');
    }
})