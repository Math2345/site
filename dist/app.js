siteMenu();

function siteMenu() {
    //меню сйта
    let submenus = document.querySelectorAll('nav.main .submenu >a');
    submenus.forEach(function (item) {
        item.addEventListener('click', function (e) {
            this.parentNode.classList.toggle('opened');
            this.querySelectorAll('.submenu').forEach((sub) => sub.parentNode.classList.remove('opened'));
            e.stopPropagation();
        })
    });
}

//бургер
let burger = document.querySelector('#burger-button');
let navMain = document.querySelector('nav.main');
burger.addEventListener('click', function () {
    navMain.classList.toggle('hide');
});