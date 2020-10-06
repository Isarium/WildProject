db.collection("listMenuFiltre").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const dataMenuList = [doc.data()]
        for (const itemMenu of dataMenuList) {
            creatNewHtmlElement(itemMenu);
        }
        function creatNewHtmlElement(docItem) {
            const theMenuDiv = document.createElement('option');
            theMenuDiv.innerHTML = `
            <option value="${doc.data().menu}">${doc.data().icone}${doc.data().menu}</option>
            `;
            document.getElementById('getType').appendChild(theMenuDiv);
        }
    });
});

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

