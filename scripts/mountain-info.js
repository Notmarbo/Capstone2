"use strict";

const mountainSelect = document.getElementById("mountainList");
const contentBox = document.getElementById("contentBox");



window.onload = () =>{
    mountainSelectList()
  


}
function mountainSelectList() {
    mountainSelect.innerHTML = "";

    let initialOption3 = new Option("Please select A mountain!", "");
    mountainSelect.appendChild(initialOption3);

    for (let listOfMountains of mountainsArray) {
        let newOption = new Option(listOfMountains.name);
        mountainSelect.appendChild(newOption);

        
    }
}

