document.addEventListener("scroll", () => {
    if(window.scrollY >= 100) {
        document.querySelector(".header").classList.add("header-scoll");
    }
    else {
        document.querySelector(".header").classList.remove("header-scoll");
    }
})