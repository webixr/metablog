
const openBtn = document.querySelector("#menu__btn--open");
const closeBtn = document.querySelector("#menu__btn--close");
const menu = document.querySelector("#menu__lists--mobile");

openBtn.addEventListener("click", (e) => {

    // if this not hidden let it hidden
    if (!openBtn.classList.contains("menu__btn--hidden")) {
        openBtn.classList.add("menu__btn--hidden");
    }

    // if close hidden let it visible
    if (closeBtn.classList.contains("menu__btn--hidden")) {
        closeBtn.classList.remove("menu__btn--hidden");
    }

    // show the menu
    if (!menu.classList.contains("menu__lists--mobile--show")) {
        menu.classList.add("menu__lists--mobile--show")
    }
})

closeBtn.addEventListener("click", (e) => {

    // if this not hidden let it hidden
    if (!closeBtn.classList.contains("menu__btn--hidden")) {
        closeBtn.classList.add("menu__btn--hidden");
    }

    // if close hidden let it visible
    if (openBtn.classList.contains("menu__btn--hidden")) {
        openBtn.classList.remove("menu__btn--hidden");
    }

    // hidden the menu
    if (menu.classList.contains("menu__lists--mobile--show")) {
        menu.classList.remove("menu__lists--mobile--show")
    }
})