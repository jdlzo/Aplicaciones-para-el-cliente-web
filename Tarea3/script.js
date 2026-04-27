function validarDatos() {
            let cedula = document.getElementById("ced").value;
            let soloNumeros = /^\d{10}$/;

            if (!soloNumeros.test(cedula)) {
                alert("la cédula debe tener exactamente 10 dígitos numéricos");
                return;
            }

            alert("datos guardados correctamente");
        }