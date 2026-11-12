// ACTIVIDAD 1: CUESTIONARIO
function corregirCuestionario() {
    let correctas = 0;
    let respuesta1 = document.getElementById("p1").value;
    let respuesta2 = document.getElementById("p2").value;
    let respuesta3 = document.getElementById("p3").value;
    let respuesta4 = document.getElementById("p4").value;
    let respuesta5 = document.getElementById("p5").value;
    if (respuesta1 == "Juan Pablo II") {
        correctas++;
    }
    if (respuesta2 == "Rigurosamente en el rezo, Eucaristía y meditación personal") {
        correctas++;
    }
if (respuesta3 == "Que abandonara sus hábitos cristianos") {
        correctas++;
    }
    if (respuesta4 == "Ser hermano lego en la Orden de las Escuelas Pías") {
        correctas++;
    }
    if (respuesta5 == "Alcampell, Huesca, Aragón, España") {
        correctas++;
    }
    document.getElementById("resultado").innerHTML =
        "Respondiste correctamente " + correctas + " de 5 preguntas.";
}
// ACTIVIDAD 1: CUESTIONARIO
function corregirCuestionario() {
    let correctas = 0;
    let respuesta1 = document.getElementById("p1").value;
    let respuesta2 = document.getElementById("p2").value;
    let respuesta3 = document.getElementById("p3").value;
    let respuesta4 = document.getElementById("p4").value;
    let respuesta5 = document.getElementById("p5").value;
    if (respuesta1 == "Juan Pablo II") {
        correctas++;
    }
    if (respuesta2 == "Rigurosamente en el rezo, Eucaristía y meditación personal") {
        correctas++;
    }
    if (respuesta3 == "Que abandonara sus hábitos cristianos") {
        correctas++;
    }
    if (respuesta4 == "Ser hermano lego en la Orden de las Escuelas Pías") {
        correctas++;
    }
    if (respuesta4 == "Alcampell, Huesca, Aragón, España") {
        correctas++;
    }
    document.getElementById("resultado").innerHTML =
        "Respondiste correctamente " + correctas + " de 5 preguntas.";
}