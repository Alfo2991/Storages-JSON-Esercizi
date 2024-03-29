
window.addEventListener('load', function () {

    const savedName = localStorage.getItem("name");
    if (savedName !== null) {
        document.getElementById("name").value = savedName;

        addNameToList(savedName);
    }

})

function saveName() {
    const name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    

    addNameToList(name);



}

function addNameToList(name) {
    const namesList = document.getElementById("namesList");
    const newNameList = document.createElement('li');
    newNameList.id = name;
    newNameList.innerHTML = name;

    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Rimuovi';
    removeButton.addEventListener('click', function() {
        removeName(name);
    });
    newNameList.appendChild(removeButton);

    namesList.appendChild(newNameList);
}

function removeName(name) {
    const nameList = document.getElementById('namesList');
    const oldName = document.getElementById(name);
    if (oldName) {
        nameList.removeChild(oldName);
        localStorage.removeItem("name");
    }
}

