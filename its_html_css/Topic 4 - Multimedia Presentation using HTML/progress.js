// Refer back to:
// progress.html
function init() {
    var run = true;
    var snd = document.getElementById("snd");
    var ctl = document.getElementById("ctl");
    var bar = document.getElementById("bar");
    var num = document.getElementById("num");
    ctl.onclick = function () {
        (run) ? snd.play() : snd.pause();
        run = !run;
    }
    snd.ontimeupdate = function () {
        bar.value = (snd.currentTime / snd.duration);
        num.innerHTML = Math.floor(100 * bar.value) + "%";
    }
}
onload = init;