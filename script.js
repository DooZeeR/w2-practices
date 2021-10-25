function menu(event) {
    event.target.classList.toggle("clicked");
}

function loadEvent() {
    const rootElement = document.getElementById('root');

    document.getElementById("menu-btn").addEventListener("click", menu);
}

window.addEventListener("load", loadEvent);