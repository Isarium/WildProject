const itemsMenuListDiv = document.createElement('div');

db.collection("listMenuFiltre").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const dataMenuList = [doc.data()]
        for (const itemMenu of dataMenuList) {
            creatNewHtmlElement(itemMenu);
        }
        function creatNewHtmlElement(docItem) {
            const theMenuDiv = document.createElement('div');
            theMenuDiv.innerHTML = `
                <p>${doc.data().icone}</p>
                <p>${doc.data().menu}</p>
            `;
            const delMenuButton = document.createElement('Button');
            const delMenuButtonTxt = document.createTextNode("Delete");
            delMenuButton.appendChild(delMenuButtonTxt);
            delMenuButton.innerHTML = "Delete";
            delMenuButton.onclick = function () {
                db.collection("listMenuFiltre").doc(`${doc.id}`).delete().then(function () {
                    console.log("La catégorie a été supprimée avec succès!");
                    window.location.reload();
                }).catch(function (error) {
                    console.error("La catégorie n'a pas pu être supprimée: ", error);
                });
            };
            itemsMenuListDiv.appendChild(theMenuDiv);
            itemsMenuListDiv.appendChild(delMenuButton);
        }
        document.getElementById('listMenuDiv').appendChild(itemsMenuListDiv);
    });
});