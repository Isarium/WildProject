function getValueMenu() {
    // Sélectionner l'élément input et récupérer sa valeur
    const inputMenuIcon = document.getElementById("getMenuIcon").value;
    const inputMenuName = document.getElementById("getMenuName").value;

    db.collection("listMenuFiltre").doc(`${inputMenuIcon}`).set({
        icone: inputMenuIcon,
        menu: inputMenuName,
    })
        .then(function () {
            alert("Catégorie ajoutée avec succès");
            window.location.reload();
        })
        .catch(function (error) {
            alert("Erreur dans l'ajout de la catégorie: ", error);
        });
}