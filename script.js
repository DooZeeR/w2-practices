/* function toggleClicked(event) {
    event.target.classList.toggle("clicked");
    document.getElementById("nav").classlist.toggle("clicked");         
}

function loadEvent() {
    document.getElementById("menu-btn").addEventListener("click", toggleClicked);
}

window.addEventListener("load", loadEvent);  */


//------------------------------------------------------------------------------------

function toggleClicked(event) {
    event.target.classList.toggle("clicked");
    document.getElementById("nav").classList.toggle("clicked");
}

function loadEvent() {
    document.getElementById("menu-btn").addEventListener("click", toggleClicked);
}

window.addEventListener("load", loadEvent);