function showkey(e) {
    var obj = (navigator.appName === 'Microsoft Internet Explorer')
        ? event : e;
    if (obj.keyCode === 89 || obj.keyCode === 121)
        alert('Y pressed. Thank You.');
}
document.onkeydown = showkey;