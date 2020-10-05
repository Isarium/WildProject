function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    const inputName = document.getElementById("getName").value;
    const inputType = document.getElementById("getType").value;
    const inputDescription = document.getElementById("getDescription").value;
    const inputLink = document.getElementById("getLink").value;

    db.collection("listSite").doc(`${inputName}`).set({
        Name: inputName,
        Type: inputType,
        Description: inputDescription,
        Link: inputLink,
    })
        .then(function () {
            alert("Site ajoutée avec succès !");
            window.location.reload();
        })
        .catch(function (error) {
            alert("Erreur dans l'inscription du site: ", error);
        });
}