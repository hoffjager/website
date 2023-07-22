// Refer back to:
// protocol.html
// &
// protocol.css

function toggle()
{
    var tag = document.getElementById("chart");
    var hid = (tag.style.visibility !== "visible");
    tag.style.visibility = (hid) ? "visible" : "hidden";
    tag.style.height = (hid) ? "auto" : "0px";
}