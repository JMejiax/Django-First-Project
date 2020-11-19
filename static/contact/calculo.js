var memo = []
for (var i = 0; i < 35; i++){
    memo.push(0);
}

function fib(n){
    if (n == 0 || n==1){return 1}
    if (memo[n] > 0) {return memo[n]}
    memo[n] = memo[n-1] + memo[n-2]
    return memo[n]
}

function getFib(){
    fecha = document.getElementById("fecha").value;
    day = fecha[8]+fecha[9]
    if (fecha[8] == '0'){day = fecha[8]+fecha[9]}
    alert(day + ', fib: ' + fib(Number(day)))
}

document.getElementById('btn1').addEventListener('click', getFib);