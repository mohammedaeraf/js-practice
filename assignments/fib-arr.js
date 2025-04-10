let fibNos = [];
let n = 10; // 0 1 1 2 3 5 8 13 21 ...

for(let i = 0; i<=n; i++) {
    if (i == 0 || i == 1) {
        fibNos.push(i);
    }
    else {
        fibNos.push(fibNos[i-1] + fibNos[i-2]);
    }
}
console.log(`Fibonacci Nos => ${fibNos}` );
