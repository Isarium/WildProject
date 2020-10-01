        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyA8gOjo2TJuuvvav0y_-4buHBYoiFen-q8",
            authDomain: "l-atelier-du-codeur.firebaseapp.com",
            databaseURL: "https://l-atelier-du-codeur.firebaseio.com",
            projectId: "l-atelier-du-codeur",
            storageBucket: "l-atelier-du-codeur.appspot.com",
            messagingSenderId: "49500006627",
            appId: "1:49500006627:web:389315a7faf5975481bdd6",
            measurementId: "G-QD32K8PHE3"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();