document.addEventListener("DOMContentLoaded", () => {
    let isClicked = false;
    let menu = document.querySelector('.menu-icon');
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        if (isClicked) {
            menu.classList.add('is-opened');
            isClicked = false;
        } else {
            menu.classList.remove('is-opened');
            isClicked = true;
        }
    });
});
