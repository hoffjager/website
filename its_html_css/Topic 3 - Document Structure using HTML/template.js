// JavaScript source code
function init() {
    var template, i, car, clone, cells;
    template = document.querySelector("#row");
    for (i=0; i < data.length; i++) {
        car = data[i];
        clone = template.content.cloneNode(true);
        cells = clone.querySelectorAll("td");
        cells[0].textContent = car.make;
        cells[1].textContent = car.model;
        cells[2].textContent = car.bhp;
        template.parentNode.appendChild(clone);
    }
}
document.addEventListener("DOMContentLoaded", init, false);