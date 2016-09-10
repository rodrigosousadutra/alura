/**
 * Created by root on 18/08/16.
 */

var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
];
console.log(campos);

var tBody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault(); // não submiter formulario
    var tr = document.createElement('tr');
    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tBody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 0;
    campos[2].value = 0;

    campos[1].focus();
});