"use strict";

const stateSelect = document.getElementById("stateSelect");
const parkTypeSelect = document.getElementById("parkTypeSelect");
const parkSelect = document.getElementById("ParkSelect");
const stateCheck = document.getElementById("stateCheck");
const parkCheck = document.getElementById("parkCheck");

const stateSelectionRow = document.getElementById("stateSelectionRow");
const parkTypeSelectionRow = document.getElementById("parkTypeSelectionRow");
const parkDetailRow = document.getElementById("parkDetailRow");
const parkSelectionRow = document.getElementById("parkSelectionRow")



window.onload = () => {
    stateSelect.onchange = onStateSelectChange;
    parkTypeSelect.onchange = onParkTypeSelectChange;
    parkCheck.addEventListener("change", handleParkCheck);
    stateCheck.addEventListener("change", handleStateCheck);


    hideParkTypeSelectRow();
    hideParkDetail();
    hideStateSelectionRow();




    stateSelectList();
    parkTypeSelectList();
}

function stateSelectList() {
    stateSelect.innerHTML = "";

    let initialOption = new Option("Please select your state!", "");
    stateSelect.appendChild(initialOption);

    for (let listOfStates of locationsArray) {
        let newOption = new Option(listOfStates);
        stateSelect.appendChild(newOption);


    }
}

function parkTypeSelectList() {
    parkTypeSelect.innerHTML = "";

    let initialOption2 = new Option("Please select a park type!");

    parkTypeSelect.appendChild(initialOption2);

    for (let listOfParkTypes of parkTypesArray) {
        let newOption2 = new Option(listOfParkTypes);
        parkTypeSelect.appendChild(newOption2);



    }

}
function handleParkCheck() {
    if (parkCheck.checked) {
        showParkTypeSelectRow();
        hideStateSelectionRow();
    } else {
       hideParkTypeSelectRow();
    }
}

function handleStateCheck() {
    if (stateCheck.checked) {
      showStateSelectionRow();
      hideParkTypeSelectRow();
    } else {
        hideStateSelectionRow();
    }
}


function onStateSelectChange() {
    let stateSelected = stateSelect.value;
    
     const parkFilter = nationalParksArray.filter(p => p.State == stateSelected);
    
    
    
    console.log(parkFilter)
  
}
function onParkTypeSelectChange() {
    let currentParkType = parkTypeSelect.value;
 
    const parkTypeFilter = parkFilter.filter(p => p.LocationName.includes(currentParkType));
    console.log(parkTypeFilter)


    if (currentParkType = "") {
        hideParkDetail();
    }
    else {
        showParkDetail();
    }
}












function hideParkTypeSelectRow() {
    parkTypeSelectionRow.style.display = "none";
}
function showParkTypeSelectRow() {
    parkTypeSelectionRow.style.display = "block";
}



function hideStateSelectionRow(){
    stateSelectionRow.style.display = "none";
}
function showStateSelectionRow(){
    stateSelectionRow.style.display = "block";
}


function hideParkDetail() {
    parkDetailRow.style.display = "none";
}

function showParkDetail() {
    parkDetailRow.style.display = "block";
}