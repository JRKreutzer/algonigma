let contador = 0;
let tentativa = 0;
let questoes;

questoes = document.getElementById("total__questoes").textContent;

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");


draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
  // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
  // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
  
}

//Events fired on the drop target

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
    event.preventDefault(); // This is in order to prevent the browser default handling of the data
    event.target.classList.remove("droppable-hover");
    const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    const draggableElement = document.getElementById(draggableElementData);
    console.log(draggableElementData);
    console.log(droppableElementData);
    console.log(draggableElement);

    let texto = draggableElement.innerHTML;

    let texto2 = draggableElementData.innerHTML;

    event.target.innerHTML = texto;
    console.log(texto);
    console.log(texto2);

    


    event.target.classList.add("dropped");
    // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    //event.target.insertAdjacentHTML("afterbegin", `<i class="${draggableElementData}"></i>`);
    tentativa += 1;
    console.log("Eu sou o tentaiva 1: " + tentativa);
//Ini
    const isCorrectMatching = draggableElementData === droppableElementData;
//Fim
    if(isCorrectMatching) {
      event.target.style.backgroundColor = "green";
      
        contador += 1;
        if (contador == questoes) {
          console.log("Eu sou o contador 1: " + contador);
            document.getElementsByClassName("popup")[0].classList.add("ativo");
            
        
        
        
        };
    }
    else {
      event.target.style.backgroundColor = "red";
    }
    if (tentativa == questoes && contador < questoes){
         console.log("Eu sou o tentativa 2: " + tentativa);
         document.getElementById("texto__falha").innerHTML = `Você não concluiu a fase, mas com prática, superará o desafio. Cometeu ${questoes - contador} erro(s), cada um representando uma oportunidade de crescimento. Continue a aprimorar suas habilidades para vencer.`;
         document.getElementsByClassName("popup2")[0].classList.add("ativo2");
    }
        
        
        
    
    
}


let url = "index.html";
let url2 = "index2.html";

document.getElementById("menu").onclick = function(){
  window.location.replace(url);
}

document.getElementById("reiniciar").onclick = function(){
  window.location.replace(url2);
}

document.getElementById("abrir-popup-popup").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.add("ativo");
});

document.getElementById("esconder-popup-popup").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.remove("ativo");
});

document.getElementById("abrir-popup-popup2").addEventListener("click", function(){
  document.getElementsByClassName("popup2")[0].classList.add("ativo2");
});

document.getElementById("esconder-popup-popup2").addEventListener("click", function(){
  document.getElementsByClassName("popup2")[0].classList.remove("ativo2");
});

questoes = document.getElementById("total__questoes").textContent;

console.log(questoes);
