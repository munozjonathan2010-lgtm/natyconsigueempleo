setTimeout(() => {

    document.getElementById("progreso").style.width = "100%";

    document.getElementById("texto").innerText =
        "Analizando nivel de henanismo...";

    setTimeout(() => {

        document.getElementById("texto").innerText =
            "Análisis completado 💀";

        document.getElementById("resultado").style.display = "block";

    }, 2500);

}, 500);


function remate() {

    alert(
        "🚨 DIAGNÓSTICO CONFIRMADO 🚨\n\n" +
        "Desempleada y enana.\n\n" +
        "El sistema no puede hacer nada más por usted. XD"
    );

}