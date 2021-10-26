function toggleClicked(event) {
    event.target.classList.toggle("clicked");
    document.getElementById("nav").classlist.toggle("clicked");
    document.querySelector("body").classlist.toggle("clicked");           
}

function loadEvent() {
    document.getElementById("menu-btn").addEventListener("click", toggleClicked);
}

window.addEventListener("load", loadEvent);

