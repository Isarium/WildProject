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
            itemsMenuListDiv.appendChild(theMenuDiv);
        }
        document.getElementById('listMenuDiv').appendChild(itemsMenuListDiv);
    });
});