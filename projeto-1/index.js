const buttonsSlideshow = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const infos = document.querySelectorAll(".info");

buttonsSlideshow.forEach((button, indice) => {
    button.addEventListener("click", () => {
        const buttonSelected = document.querySelector(".selected");
        buttonSelected.classList.remove("selected");
        button.classList.add("selected");

        const imageActive = document.querySelector(".active");
        imageActive.classList.remove("active");

        images[indice].classList.add("active");

        const infoActive = document.querySelector(".info.active");
        infoActive.classList.remove("active");

        infos[indice].classList.add("active");
    });
})