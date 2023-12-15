let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelInedex) {
    tabPanels.forEach(function(node) {
        node.style.display ="none"
    });
    tabPanels[panelInedex].style.display = "block";
}

showPanel(0)



const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
})


let hamburgerEl = document.querySelector(".hamburger");
let listEl = document.querySelector(".list");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");

hamburgerEl.addEventListener("click", function() {
    listEl.classList.toggle("change")
    bar1.classList.toggle("change-bar1")
    bar2.classList.toggle("change-bar2")
    bar3.classList.toggle("change-bar3")
})