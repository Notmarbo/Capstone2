"use strict";

const mountainSelect = document.getElementById("mountainList");

const contentBox = document.getElementById("contentBox");


const infoBox = document.getElementById("infoBox");
const pictureBox = document.getElementById("pictureBox")



window.onload = () => {
    mountainSelectList();
    mountainSelect.onchange = onMountainChange;

    hideContentBox();



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

function onMountainChange() {
    infoBox.innerHTML = "";
    let mountainSelected = mountainSelect.value;

    const mountainFilter = mountainsArray.filter(p => p.name == mountainSelected);

    console.log(mountainFilter);


    if (mountainSelected = "") {
        hideContentBox();
    }
    else {
        showContentBox();
    }


    if (mountainFilter.length > 0) {
        for (let MT of mountainFilter) {
            makeInfoCard(MT);
        }
    }
}

function makeInfoCard(MT) {
    let col = document.createElement("div");
    col.className = "container col my-2";
    infoBox.appendChild(col);

    let card = document.createElement("div");
    card.className = "card";
    col.appendChild(card);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    let h4MountainName = document.createElement("h4");
    h4MountainName.className = "card-title";
    h4MountainName.innerHTML = MT.name;
    cardBody.appendChild(h4MountainName);

    let ulList = document.createElement("ul");
    ulList.className = "ul";
    h4MountainName.appendChild(ulList);

    let mountainImage = document.createElement("img");
    mountainImage.className = "mountainImage";
    mountainImage.src = "images/" + MT.img;
    mountainImage.alt = "mountain image";
    ulList.appendChild(mountainImage);

    let listElevation = document.createElement("li");
    listElevation.className = "mountainElevation";
    listElevation.innerHTML = "Elevation:" + MT.elevation;
    ulList.appendChild(listElevation);


    let listeffort = document.createElement("li");
    listeffort.className = "mountainEffort";
    listeffort.innerHTML = "Effort:" + MT.effort;
    ulList.appendChild(listeffort);

    let listdesc = document.createElement("li");
    listdesc.className = "mountainDesc";
    listdesc.innerHTML = "Description:" + MT.desc;
    ulList.appendChild(listdesc);

    let listLat = document.createElement("li");
    listLat.className = "mountainLat";
    listLat.innerHTML = "Latitude:" + MT.coords.lat;
    ulList.appendChild(listLat);
    let listlng = document.createElement("li");
    listlng.className = "mountainLng";
    listlng.innerHTML = "Longitude:" + MT.coords.lng;
    ulList.appendChild(listlng);
}




function showContentBox() {
    contentBox.style.display = "block"
}
function hideContentBox() {
    contentBox.style.display = "none"
}

