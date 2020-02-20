module.exports = function reverse (n) {
    return String(n).match(/[0-9]/g).reverse().join('') //Если регулярное выражение содержит флаг g, метод вернёт массив, содержащий все сопоставления. 
}
