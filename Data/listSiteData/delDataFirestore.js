const listDivGlobal = document.getElementById('listDiv');

db.collection("listSite").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
        const listDivElement = document.createElement("div");
        const listH1 = document.createElement('H1');
        const h1Txt = document.createTextNode(`${doc.data().Name}`);
        listH1.appendChild(h1Txt);
        const listType = document.createElement('P');
        const listTypeTxt = document.createTextNode(`${doc.data().Type}`);
        listType.appendChild(listTypeTxt);
        const listDescription = document.createElement('P');
        const listDescriptionTxt = document.createTextNode(`${doc.data().Description}`);
        listDescription.appendChild(listDescriptionTxt);
        const listLink = document.createElement('a');
        const listLinkTxt = document.createTextNode(`${doc.data().Link}`)
        listLink.href = [doc.data().Link];
        listLink.appendChild(listLinkTxt)
        const delButton = document.createElement('Button');
        delButton.setAttribute("class", "deleteButtonIcon");
        delButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        delButton.onclick = function () { 
            db.collection("listSite").doc(`${doc.id}`).delete().then(function () {
                console.log("Document successfully deleted!");
                window.location.reload();
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
         };
        listDivElement.appendChild(listH1);
        listDivElement.appendChild(listType);
        listDivElement.appendChild(listDescription);
        listDivElement.appendChild(listLink);     
        listDivElement.appendChild(delButton);
        listDivGlobal.appendChild(listDivElement);
    });
});