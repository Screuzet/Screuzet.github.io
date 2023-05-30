//amélioration de la fonction setActive qui désormais prend en paramètre la balise a et active le li parent et la section correspondante à l'attibut href de la balise a
function setActive(a, id) {
    var lis = document.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
    }
    a.parentNode.classList.add('active');
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    document.querySelector(id).classList.add('active');
}

// la fonction setActiveDiv prend en paramètre la balise a et s'active elle-même ainsi que la div correspondante à l'attibut href de la balise a
function setActiveDiv(a) {
    var lis = document.querySelectorAll('a');
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
    }
    a.classList.add('active');
    var href = a.getAttribute('href');
    var sections = document.querySelectorAll('div');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    document.querySelector(href).classList.add('active');
}

//active la div avec l'id passé en paramètre
function activer(href) {
    var sections = document.querySelectorAll('div');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    document.querySelector(href).classList.add('active');
}

window.onload = function() {
    document.querySelector('#about').classList.add('active');
    document.querySelector('#base').classList.add('active');
    document.querySelector('#ProjetsJava').classList.add('active');
}
