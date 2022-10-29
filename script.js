var N = [];
var n = 0;
var contador = 0;
var repeticao = 0;
var parar = 'nao';

function verificarElemento(N){
    N = N.map(Number);

    while(N.length > contador){
        if(N[contador] == Math.max(...N)){
             repeticao = repeticao++;
        }
        contador = contador++; 
    }

    return console.log('O maior número é :' ,Math.max(...N) , 'ele se repete :' , repeticao , 'vezes');
}

while(parar != 'sim'){
    n = prompt('Digite um número:');
    parar = prompt('Para parar digite sim :');
    N.push(n); 
}

if(parar == 'sim'){
    verificarElemento(N);
}
