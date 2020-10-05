const itemsListDiv = document.createElement('div');
const iteMenuSelect = "";

db.collection("listSite").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const dataList = [doc.data()]
        for (const item of dataList) {
            if (doc.data().Type == iteMenuSelect) {
                creatNewHtmlElement(item);
            } else if (iteMenuSelect == "") {
                creatNewHtmlElement(item);
            }
        }
        function creatNewHtmlElement(docItem) {
            const theDiv = document.createElement('div');
            theDiv.innerHTML = `
                        <h1>${doc.data().Name}</h1>
                        <p>${doc.data().Type}</p>
                        <p>${doc.data().Description}</p>
                        <a href="${doc.data().Link}">${doc.data().Link}</a>
                    `;
            itemsListDiv.appendChild(theDiv);
        }
        document.getElementById('listDiv').appendChild(itemsListDiv);

    });
});