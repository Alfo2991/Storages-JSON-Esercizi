

function saveName() {
    const name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    alert("Nome salvato!");

    const nameList = document.getElementById("nameList");
    const newNamelist = document.createElement('li');
    newNamelist.innerHTML = name;
    nameList.appendChild(newNamelist)

}

function removeName() {
    localStorage.removeItem("name");
    alert("Nome rimosso!");

    const nameList = document.getElementById('nameList');
    nameList.innerHTML = ".nomiSalvati"

}
window.addEventListener('load', function(){

const savedName = localStorage.getItem("name");
if (savedName !== null) {
    document.getElementById("name").value = savedName;

    const nameList = document.getElementById("nameList");
    const newNamelist = document.createElement('li');
    newNamelist.innerHTML = name;
    nameList.appendChild(newNamelist)
}

})
