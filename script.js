/* function menu(event) {
    event.target.classList.toggle("clicked");
} */
function toggleClicked(event) {
    event.target.classlist.toggle("clicked");
    document.getElementById("menu-btn").classlist.toggle("clicked");
};

function loadEvent() {
    console.log("the page has loaded");

     const rootElement = document.getElementById('root'); 

    document.getElementById("menu-btn").addEventListener("click", toggleClicked);
    
}

window.addEventListener("load", loadEvent);