
let elementosElegidos=[];

let puntos = 0; 

let respuestasIncorrectas = 0;

let elementos = document.querySelectorAll('.elementos');





function elegir() {
    elementos.forEach(elemento => {
        elemento.addEventListener('click', (e) => {
            let valor = e.target.value;
            let index = elementosElegidos.indexOf(valor);
            if (index === -1 && elementosElegidos.length<3) {
                elementosElegidos.push(valor);
                console.log(elementosElegidos);
            }
            else {
                elementosElegidos.splice(index, 1);
                console.log(elementosElegidos);
            }

            mostrarSeleccionados();
            
        });
    });
}




document.getElementById("desafio_1").addEventListener("click", function(){
    //let respuestaCorrecta=["Be","Na","C"]; 
    let enunciado = document.getElementById('enunciado');
    enunciado.innerHTML = "<h2>Poción N°1:</h2><p>Para esta pócima necesita Berilio, Sodio y Carbono. </p>  <p>Con un click seleccionás el elemento, con un segundo click lo eliminás. Cuando estés segura/o de tu elección confirmá con el botón. Tenés tres posibilidades para acertar. Exitos!</p>";

    elementosElegidos = [];
    mostrarSeleccionados()

    elementos.forEach(elemento => {
        elemento.disabled = false;
    });

    document.getElementById("confirmar").style.display = "block";
    
   
});
       
elegir();

function mostrarSeleccionados() {
let seleccionadosDiv = document.getElementById('seleccionados');
seleccionadosDiv.innerHTML = `Elementos seleccionados: ${elementosElegidos}`;
}


document.getElementById("confirmar").addEventListener("click", function() {
confirmarSeleccion();
});



function confirmarSeleccion() {
    let resultadoDiv = document.getElementById('resultado');
    let respuestaCorrecta = ["Be", "Na", "C"];


    if (elementosElegidos.length !== respuestaCorrecta.length) {
        resultadoDiv.innerHTML = "...se necesitan 3 elementos.";
       return;
    }

    let esCorrecto = respuestaCorrecta.every(elemento => elementosElegidos.includes(elemento));

  if (esCorrecto) {
    puntos++;
    resultadoDiv.innerHTML = "¡Felicitaciones! Elegiste bien los elementos 🤓. Puntos: " + puntos;
  } else {
    respuestasIncorrectas++;
    resultadoDiv.innerHTML = "Que pena. 😔 Los elementos que elegiste no son correctos. Respuestas incorrectas: " + respuestasIncorrectas;
  }


  if (respuestasIncorrectas === 3) {
    resultadoDiv.innerHTML += " 😭¡Perdiste! Tuviste tres respuestas incorrectas.";

    elementos.forEach(elemento => {
      elemento.disabled = true;
      document.getElementById("reiniciar").style.display = "block";
    });
  }
    elementosElegidos = [];
    mostrarSeleccionados();
    

}



function reiniciarJuego() {
    elementosElegidos = [];
    puntos = 0;
    respuestasIncorrectas = 0;

    let enunciado = document.getElementById('enunciado');
    enunciado.innerHTML = "";

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "";

    mostrarSeleccionados(); 
    document.getElementById("reiniciar").style.display = "none"; 
    document.getElementById("confirmar").style.display = "none";
}


document.getElementById("reiniciar").addEventListener("click", reiniciarJuego)



