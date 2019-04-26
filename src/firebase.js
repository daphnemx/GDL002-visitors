firebase.initializeApp({
	apiKey: "AIzaSyATd_NEeul67on2O3YhMTmgVmjFmKtYKm8",
	authDomain: "visitors-registration.firebaseapp.com",
	databaseURL: "https://visitors-registration.firebaseio.com",
	projectId: "visitors-registration",
	storageBucket: "visitors-registration.appspot.com",
	messagingSenderId: "573685055395"
});


const registerVisit = (getVisitorRegistry) => {
	firebase.firestore().collection("visitorsLog").add(visitRegistry).
		then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id, visitRegistry);
		    location.reload(true);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
};