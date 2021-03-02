
document.addEventListener("DOMContentLoaded", start);

let elementToPaint;
let colorAlreadyAssigned = false;

async function start(){
let response = await fetch("cap-exercise.svg");
let mySVGData = await response.text();
document.getElementById("svg").innerHTML = mySVGData;
startManipulatingSvg();
}

function startManipulatingSvg(){
    //add Eventlistener to cap svg and call checkPart 
    document.getElementById("svg").addEventListener("click", checkPart);

    //add Eventlistener for color boxes
    const colorButtons = document.querySelectorAll("svg rect");
    colorButtons.forEach((colorButton) => {
        colorButton.addEventListener("click", checkColorFill);
    });
}

function checkPart(event){
    console.log(event);
    //check which part was called 
    let clickedPart = event.path[1].id
    if (clickedPart == "visor"){
        elementToPaint = document.querySelector("#visor path");
    } else if(clickedPart == "crown"){
        elementToPaint = document.querySelector("#crown path");
    }
    };

function checkColorFill(event){
    let colorFillSelected = event.target.attributes.fill.value;
    assignColor(colorFillSelected);
}

function assignColor(colorFillSelected){

    colorAlreadyAssigned= true;

    if (colorAlreadyAssigned == true) {
        elementToPaint.classList.remove("red-fill");
        elementToPaint.classList.remove("blue-fill");
        elementToPaint.classList.remove("green-fill");
        elementToPaint.classList.remove("yellow-fill");
    } else {
        return
    }

if(colorFillSelected == "red"){
   elementToPaint.classList.add("red-fill");

}  else if (colorFillSelected == "blue"){
    elementToPaint.classList.add("blue-fill");

} else if (colorFillSelected == "green"){
    elementToPaint.classList.add("green-fill");

} else if (colorFillSelected == "yellow"){
    elementToPaint.classList.add("yellow-fill");
} else {
    return;
}

}

