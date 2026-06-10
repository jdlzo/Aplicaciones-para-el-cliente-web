document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector(".registrar");

    boton.addEventListener("click", () => {

        const nombre = document.querySelector(".nombre").value.trim();
        const apellido = document.querySelector(".apellido").value.trim();
        const cedula = document.querySelector(".cedula").value.trim();
        const correo = document.querySelector(".correo").value.trim();
        const direccion = document.querySelector(".direccion").value.trim();
        const telefono = document.querySelector(".telefono").value.trim();
        const facultad = document.querySelector(".facultad").value.trim();
        const nivel = document.querySelector(".nivel").value.trim();
        const paralelo = document.querySelector(".paralelo").value.trim();

        // VALIDACIONES
        if (!/^\d+$/.test(cedula)) {
            alert("La cédula debe contener solo números");
            return;
        }

        if (!/^\d{10}$/.test(telefono)) {
            alert("El teléfono debe tener 10 dígitos");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }

        if (
            nombre === "" ||
            apellido === "" ||
            cedula === "" ||
            correo === "" ||
            direccion === "" ||
            telefono === "" ||
            facultad === "" ||
            nivel === "" ||
            paralelo === ""
        ) {
            alert("Complete todos los campos");
            return;
        }

        alert("Registro exitoso");

        const objeto = {
            nombre,
            apellido,
            cedula,
            correo,
            direccion,
            telefono,
            facultad,
            nivel,
            paralelo
        };

        let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

        estudiantes.push(objeto);

        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

        document.getElementById("salida").textContent =
            JSON.stringify(estudiantes, null, 2);
    });
});