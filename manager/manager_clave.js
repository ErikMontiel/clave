function aleatorio(length) {
    letras_m = '';
    letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    longitud_letras = letras.length;
    for (var i = 0; i < length; i++) {
        letras_m += letras.charAt(Math.floor(Math.random() * longitud_letras));
    }
    return letras_m;
}


function rfc() {

    nombre_completo = paterno0 + paterno1 + materno + nombre;

    al = aleatorio(3);

    nombre_incompatible = ["PUTO", "PUTA", "COJE"];
    for (var i = 0; i < nombre_incompatible.length; i++) {
        if (nombre_completo == nombre_incompatible[i]) {

            nom_corr = paterno0 + paterno1 + materno + 'X' + fecha_nacimiento + al;
            swal('Listo', 'Correcion de RFC con Homoclave \n' + nom_corr, 'success');
        } else {
            $('#resultado_bd').html(nombre_completo + fecha_nacimiento + al);
        }
    }
}

$(".letra").bind('keypress', function(event) {
    regex = new RegExp("^[a-zA-Z ]+$");
    key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$(document).ready(function() {



    $('#btn_trabaja').click(function() {

        paterno0 = $('#captura_paterno').val().toUpperCase().charAt(0);
        paterno1 = $('#captura_paterno').val().toUpperCase().charAt(1);
        materno = $('#captura_materno').val().toUpperCase().charAt(0);
        nombre = $('#captura_nombre').val().toUpperCase().charAt(0);

        fecha_nacimiento = $('#captura_año').val() + $('#captura_mes').val() + $('#captura_dia').val();



        if ($('#captura_nombre').val() == "") {
            swal(' Hubo un Error ', 'No has ingresado Nombre', 'warning');
        } else if ($('#captura_paterno').val() == "") {
            swal(' Hubo un Error ', 'No has ingresado A Paterno', 'warning');
        } else if ($('#captura_materno').val() == "") {
            swal(' Hubo un Error ', 'No has ingresado A Materno', 'warning');
        } else if ($('#captura_dia').val() == "") {
            swal(' Hubo un Error ', 'No has ingresado Dia', 'warning');
        } else if ($('#captura_mes').val() == "") {
            swal(' Hubo un Error ', 'No has ingresado Mes', 'warning');
        } else if ($('#captura_año').val() == "") {
            swal(' Hubo un Error ', 'No has ingresado Año', 'warning');
        } else {
            rfc();
        }
    });
});