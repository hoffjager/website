// JavaScript source code
function multiply(q, p) {
    var result = parseFloat(q.value) * parseFloat(p.value):
    if (isNaN(result) || result < 1)
        return "";
    else
        return "Total: $" + result.toFixed(2);
}