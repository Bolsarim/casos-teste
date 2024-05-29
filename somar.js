function somar(a, b) {
a = parseFloat(a)
b = parseFloat(b)
if((isFinite(a) == false) || (isFinite(b) == false)){
    return "Caractere inválido"
}
   
    return a + b;
}

module.exports = somar;
 

 