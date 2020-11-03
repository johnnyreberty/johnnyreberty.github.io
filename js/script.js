let divActive = 'home'
document.querySelectorAll('[toggle-pages]').forEach(element => {
    element.addEventListener('click', function(elem){
        var target;
        if (elem.target.tagName == "I") {
            const aux = document.querySelectorAll(`[toggle-pages="${elem.target.getAttribute('target-father')}"]`)[0];
            target = aux;
        } else {
            target = elem.target;
        }
        const active = document.getElementsByClassName('active')[0].classList.remove('active');
        target.classList.add('active');
        document.getElementById(divActive).classList.add('d-none');
        document.getElementById(`${target.getAttribute('toggle-pages')}`).classList.remove('d-none')
        divActive = document.getElementById(`${target.getAttribute('toggle-pages')}`).id;
        document.getElementById('button-menu').click();
    });
});
function openMenu(buttonId){
    const button = document.getElementById(buttonId);
    const icon = button.getElementsByTagName('i')[0];
    const menu = document.getElementById('menu-items');
    if (icon.classList.contains('icon-menu')) {
        icon.classList.remove('icon-menu');
        icon.classList.add('icon-x');
        menu.classList.remove('d-none');
        menu.classList.add('menuExpanded');
    } else if(icon.classList.contains('icon-x')){
        icon.classList.remove('icon-x');
        menu.classList.remove('menuExpanded');
        icon.classList.add('icon-menu');
        menu.classList.add('d-none');
    }
}