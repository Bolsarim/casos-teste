function somar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
         new Error('Entrada inválida: ambos os valores devem ser números.')
    }
    return a + b
}

module.exports = somar