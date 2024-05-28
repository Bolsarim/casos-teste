function somar(a, b) {
    if (typeof a === 'string') {
        a = parseInt(a, 10);            
    }
    if (typeof b === 'string') {
        b = parseInt(b, 10);           
    }
            
    if (isNaN(a) || isNaN(b)) {               
        return "Caractere inválido";                
    }
   
    return a + b;
}

module.exports = somar;
 

 /*if (typeof a === 'string') { verifica se o tipo do parâmetro a é uma string.
a = parseInt(a, 10); se a for uma string, ele é convertido para um número inteiro usando parseInt(a, 10).
parseInt é uma função nativa do JavaScript que converte uma string em um número inteiro. O segundo argumento 10 especifica a base (radix) da conversão, que neste caso é a base decimal.*/



/*if (isNaN(a) || isNaN(b)) { verifica se a ou b não são números válidos após a conversão.
isNaN é uma função que retorna true se o argumento não for um número (NaN - Not-a-Number).
return "Caractere inválido"; se qualquer um dos parâmetros não for um número válido, a função retorna a string "Caractere inválido".*/