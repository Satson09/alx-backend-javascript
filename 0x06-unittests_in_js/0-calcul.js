
function calculateNumber(a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    const c = an + bn;
    return c;
// 0-calcul.js
function calculateNumber(a, b){
    return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
