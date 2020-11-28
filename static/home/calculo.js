function calculos(){
    var iva = 0.14;
    var pordia = 50.0;

    var pagoMensual = pordia*30.0;
    var impuesto = pagoMensual*iva;
    var totalMensual = pagoMensual+impuesto;

    var pagoAnual = pagoMensual*12.0;
    var impuestoA = pagoAnual*iva;
    var totalAnual = pagoAnual+impuestoA;

    var body = document.getElementsByClassName("modal-body");
    body.innerHTML += "<h4>Pago por día: " + pordia + "</h4>";
    body.innerHTML += "<h4>Pago mensual: " + totalMensual + "</h4>";
    body.innerHTML += "<h4>Pago por año: " + totalAnual + "</h4>";
    body.innerHTML += "<h4>Porcentaje de impuestos: " + (iva*100.0) + "% </h4>";
}

document.get