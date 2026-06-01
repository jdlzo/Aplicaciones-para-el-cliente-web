const buscador = document.getElementById("buscar-empleado");
const filas = document.querySelectorAll(".seccion-empleados tbody tr");

buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    filas.forEach(fila => {

        const contenido = fila.textContent.toLowerCase();

        if (contenido.includes(texto)) {

            fila.style.display = "";
            fila.classList.add("fila-encontrada");

        } else {

            fila.style.display = "none";
            fila.classList.remove("fila-encontrada");

        }

        if(texto === ""){
            fila.classList.remove("fila-encontrada");
        }

    });

});