function fib(n){
	var a = 0
	var b = 1
	for(var i = 2; i<Number(n+1); i++){
		var new_a = 0 * a + 1 * b
		var new_b = 1 * a + 1 * b
		
		a = new_a
        b = new_b
    }
	return b
}

function getFib(){
    fecha = document.getElementById("fecha").value;
    day = fecha[8]+fecha[9]
    if (fecha[8] == '0'){day = fecha[9]}
    alert('Todo correcto, nos pondremos en contacto pronto\n' + 
    '**Sabias que ' + fib(Number(day)) + ', es el fibonacci de ' + day 
    + ', el dia de tu cumpleaños :)**')
}

document.getElementById('btn1').addEventListener('click', getFib);