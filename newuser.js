function saveName() {
    const name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    alert("Nome salvato!");
}

function removeName() {
    localStorage.removeItem("name");
    alert("Nome rimosso!");
}

const savedName = localStorage.getItem("name");
if (savedName !== null) {
    document.getElementById("name").value = savedName;
}