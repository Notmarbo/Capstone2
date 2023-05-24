"use strict";

const stateSelect = document.getElementById("stateSelect");
const parkTypeSelect = document.getElementById("parkTypeSelect");
const parkSelect = document.getElementById("ParkSelect")

const stateSelectionRow = document.getElementById("stateSelectionRow");
const parkTypeSelectionRow = document.getElementById("parkTypeSelectionRow");
const parkDetailRow = document.getElementById("parkDetailRow");
const parkSelectionRow = document.getElementById("parkSelectionRow")

const parkName = document.getElementById("parkName");
const parkDetails = document.getElementById("parkDetails");
const parkAddress = document.getElementById("parkAddress");
const parkCity = document.getElementById("parkCity");
const parkState = document.getElementById("parkState");
const parkPhone = document.getElementById("parkPhone");
const parkFax = document.getElementById("parkFax");
const parkVisit = document.getElementById("parkVisit");
const parkLatitude = document.getElementById("parkLatitude");
const parkLongitude = document.getElementById("parkLongitude");
const parkCords = document.getElementById("parkCords");


window.onload = () => {
    stateSelect.onchange = onStateSelectChange;
    parkTypeSelect.onchange = onParkTypeSelectChange;


    hideParkTypeSelect();
    hideParkDetail();


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


// function createNationalParkcard(park) {
    
//     let divCol = document.createElement("div");
//     divCol.className = "col" ;
//     parkDetailRow.appendChild(divCol);
    
    
    
//     let divCard = document.createElement("div");
//     divCard.className = "card" ;
//     divCol.appendChild(divCard);
    
//     let divCardBody = document.createElement("div");
//     divCardBody.className = "card-body" ;
//     divCard.appendChild(divCardBody);
    
//     let h5Name = document.createElement("h5");
//     h5Name.className = "card-title" ;
//     h5Name.innerHTML = park.LocationName;
//     divCardBody.appendChild(h5Name);
    
    
// }


function onStateSelectChange() {
    let stateSelected = stateSelect.value;
    
    const parkFilter = nationalParksArray.filter(p => p.State == stateSelected);
    
    console.log(parkFilter)

    
    if (stateSelected = "") {
        hideParkTypeSelect();
    }
    else {
        showParkTypeSelect()
  
    }
}

function onParkTypeSelectChange() {
    let currentParkType = parkTypeSelect.value;
 


    if (currentParkType = "") {
        hideParkDetail();
    }
    else {
        showParkDetail();
    }
}











function hideParkTypeSelect() {
    parkTypeSelectionRow.style.display = "none";
}
function showParkTypeSelect() {
    parkTypeSelectionRow.style.display = "block";
}


function hideParkDetail() {
    parkDetailRow.style.display = "none";
}

function showParkDetail() {
    parkDetailRow.style.display = "block";
}

