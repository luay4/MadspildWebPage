"use strict";

window.addEventListener("load", init);
let carrouselCount = 1;

function init() {
    document.querySelector(".cb1").addEventListener("click", showCollapsibleContent);
    document.querySelector(".cb2").addEventListener("click", showCollapsibleContent);
    document.querySelector(".cb3").addEventListener("click", showCollapsibleContent);
    carrousel();
}

function showCollapsibleContent() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function carrousel() {
    if (carrouselCount < 3) {
        carrouselCount++;
    } else if (carrouselCount === 3) {
        carrouselCount = 1;
    }
    clearImages();
    document.querySelector(".carrousel" + carrouselCount).classList.toggle("hidden");
    document.querySelector(".carrousel" + carrouselCount).classList.toggle("animation");
    setTimeout(carrousel, 5000);
}

function clearImages() {
    document.querySelector(".carrousel1").classList.add("hidden");
    document.querySelector(".carrousel2").classList.add("hidden");
    document.querySelector(".carrousel3").classList.add("hidden");
    document.querySelector(".carrousel1").classList.remove("animation");
    document.querySelector(".carrousel2").classList.remove("animation");
    document.querySelector(".carrousel3").classList.remove("animation");
}