/* function fibo(n){
let arre =[1,1];
for (let i=2;i++){
    arre[i]=arre[i-1]+arre[i-2];
} return arre;
console.log(arre);
}
fibo(6); */
/* function fibo(n) {
    let arre = [0, 1];

    for (let i = 2; i < n; i++) {
        arre[i] = arre[i - 1] + arre[i - 2];
    }

    console.log(arre);
    return arre;
}

fibo(6); */
function fibo(n) {
    if (n < 2) return n;
    return fibo(n - 1) + fibo(n - 2);
}

function generarFibonacci(n) {
    let resultado = [];
    for (let i = 0; i < n; i++) {
        resultado.push(fibo(i));
    }
    console.log(resultado);
    return resultado;
}

generarFibonacci(6);  
