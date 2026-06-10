document.getElementById("exportar").addEventListener("click", () => {

    const datos = localStorage.getItem("estudiante");

    const blob = new Blob([datos], {
        type: "application/json"
    });

    const enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(blob);
    enlace.download = "estudiante.json";
    enlace.click();
});