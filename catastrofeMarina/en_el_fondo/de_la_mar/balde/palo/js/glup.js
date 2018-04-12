function agregarBurbuja(x,y) {
    var burbuja = document.createElement("div");
    burbuja.innerHTML = "o";

    burbuja.classList.add("burbuja");
    burbuja.style.left = x + "px";
    burbuja.style.top = y + "px";

    document.body.append(burbuja);
}

function glup(e) {
    agregarBurbuja(e.clientX, e.clientY);
}

document.body.addEventListener("click", glup );
