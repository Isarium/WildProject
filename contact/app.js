//document.addEventListener("DOMContentLoaded", () =>{

//});


// Création des variables pour récupérer les données saisies dans le form html
//send();
// création de la fonction pour afficher une fenêtre alerte avec les données saisies par l'internaute
function send(){
    let firstname = document.getElementById("get-firstname").value;
    let lastname = document.getElementById("get-lastname").value;
    let mail = document.getElementById("get-mail").value;
    let message = "Votre message a été bien envoyé.";
    
        //console.log(message);
        //console.log(${lastname});
        alert(`${firstname} ${lastname} ${mail} ${message}`);
    
}
