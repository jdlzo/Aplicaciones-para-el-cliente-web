const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

let fechaActual = new Date();

const contenedorMes = document.getElementById("mes-actual");
const contenedorDias = document.getElementById("dias-calendario");

function generarCalendario() {

    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth();

    contenedorMes.textContent =
        `${nombresMeses[mes]} ${año}`;

    const primerDia = new Date(año, mes, 1).getDay();

    const diasMes =
        new Date(año, mes + 1, 0).getDate();

    contenedorDias.innerHTML = "";

    let fila = document.createElement("tr");

    for(let i = 0; i < primerDia; i++){

        const celda = document.createElement("td");
        fila.appendChild(celda);

    }

    for(let dia = 1; dia <= diasMes; dia++){

        if(fila.children.length === 7){

            contenedorDias.appendChild(fila);
            fila = document.createElement("tr");

        }

        const celda = document.createElement("td");
        celda.textContent = dia;

        const hoy = new Date();

        if(
            dia === hoy.getDate() &&
            mes === hoy.getMonth() &&
            año === hoy.getFullYear()
        ){
            celda.classList.add("dia-actual");
        }

        fila.appendChild(celda);

    }

    while(fila.children.length < 7){

        const celda = document.createElement("td");
        fila.appendChild(celda);

    }

    contenedorDias.appendChild(fila);

}

document
.getElementById("mes-anterior")
.addEventListener("click", () => {

    fechaActual.setMonth(
        fechaActual.getMonth() - 1
    );

    generarCalendario();

});

document
.getElementById("mes-siguiente")
.addEventListener("click", () => {

    fechaActual.setMonth(
        fechaActual.getMonth() + 1
    );

    generarCalendario();

});

generarCalendario();