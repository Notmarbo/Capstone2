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

    let initialOption2 = new Option("Please select a park type!","");

    parkTypeSelect.appendChild(initialOption2);

    for (let listOfParkTypes of parkTypesArray) {
        let newOption2 = new Option(listOfParkTypes);
        parkTypeSelect.appendChild(newOption2);



    }

}
function handleParkCheck() {
    if (parkCheck.checked) {
        parkDetailRow.innerHTML = "";
        parkTypeSelect.value = "";
        showParkTypeSelectRow();
        hideStateSelectionRow();
    } else {
        hideParkTypeSelectRow();
    }
}

function handleStateCheck() {
    if (stateCheck.checked) {
        parkDetailRow.innerHTML ="";
        stateSelect.value = "";
        showStateSelectionRow();
        hideParkTypeSelectRow();
    } else {
        hideStateSelectionRow();
    }
}


function onStateSelectChange() {
    parkDetailRow.innerHTML ="";
    let stateSelected = stateSelect.value;

    const parkFilter = nationalParksArray.filter(p => p.State == stateSelected);



    console.log(parkFilter)
    if (stateSelected = "") {
        hideParkDetail();
    }
    else {
        showParkDetail();
    }

    
    if(parkFilter.length > 0) {
        for (let park of parkFilter) {
            makeParkCard(park);
        }
    }


}
function onParkTypeSelectChange() {
    parkDetailRow.innerHTML ="";
    let currentParkType = parkTypeSelect.value;

    const parkTypeFilter = nationalParksArray.filter(p => p.LocationName.includes(currentParkType));
    console.log(parkTypeFilter)


    if (currentParkType = "") {
        hideParkDetail();
    }
    else {
        showParkDetail();
    }

    
    if(parkTypeFilter.length > 0) {
        for (let park of parkTypeFilter) {
            makeParkCard(park);
        }
        
    }

}

function makeParkCard(park) {
    let col = document.createElement("div");
    col.className = "container col my-2";
    parkDetailRow.appendChild(col);

    let card = document.createElement("div");
    card.className = "card";
    col.appendChild(card);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    let h4parkName = document.createElement("h4");
    h4parkName.className = "card-title";
    h4parkName.innerHTML = park.LocationName;
    cardBody.appendChild(h4parkName);

    let ulList = document.createElement("ul");
    ulList.className = "ul";
    h4parkName.appendChild(ulList);

    let listId = document.createElement("li");
    listId.className = "parkId";
    listId.innerHTML = "Id: " + park.LocationID;
    ulList.appendChild(listId);

    let listAddress = document.createElement("li");
    listAddress.className = "parkId";
    listAddress.innerHTML = "Address: " + park.Address;
    listId.appendChild(listAddress);

    let listCity = document.createElement("li");
    listCity.className = "parkCity";
    listCity.innerHTML = "City: " + park.City;
    listAddress.appendChild(listCity);

    let listState = document.createElement("li");
    listState.className = "parkState";
    listState.innerHTML = "State: " + park.State;

    let listZipCode = document.createElement("li");
    listZipCode.className = "parkId";
    listZipCode.innerHTML = "Zip Code: " + park.ZipCode;
    ulList.appendChild(listZipCode);
}

function hideParkTypeSelectRow() {
    parkTypeSelectionRow.style.display = "none";
}
function showParkTypeSelectRow() {
    parkTypeSelectionRow.style.display = "block";
}



function hideStateSelectionRow() {
    stateSelectionRow.style.display = "none";
}
function showStateSelectionRow() {
    stateSelectionRow.style.display = "block";
}


function hideParkDetail() {
    parkDetailRow.style.display = "none";
}

function showParkDetail() {
    parkDetailRow.style.display = "block";
}