

function saveName() {
    const name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    

    addNameToList(name);



}

function removeName() {
    localStorage.removeItem("name");
    

    const nameList = document.getElementById('nameList');
    nameList.innerHTML = ""

}

function addNameToList(name) {
    const nameList = document.getElementById("nameList");
    const newNameList = document.createElement('li');
    newNameList.innerHTML = name;
    nameList.appendChild(newNamelist)
}
window.addEventListener('load', function () {

    const savedName = localStorage.getItem("name");
    if (savedName !== null) {
        document.getElementById("name").value = savedName;

        addNameToList(savedName);
    }

})
