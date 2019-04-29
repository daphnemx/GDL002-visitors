firebase.initializeApp({
	apiKey: "AIzaSyATd_NEeul67on2O3YhMTmgVmjFmKtYKm8",
	authDomain: "visitors-registration.firebaseapp.com",
	databaseURL: "https://visitors-registration.firebaseio.com",
	projectId: "visitors-registration",
	storageBucket: "visitors-registration.appspot.com",
	messagingSenderId: "573685055395"
});

let lastRegistryId = '';

const registerVisit = (getVisitorRegistry) => {
	firebase.firestore().collection("visitorsLog").add(visitRegistry)
		.then((docRef) => {
		    lastRegistryId = docRef.id;
		    console.log("Document written with ID: ", lastRegistryId, visitRegistry);
		    sendEmailNotification()})
		.then(() => {
			const returnBtn = document.querySelector('.getVisitors');
			returnBtn.addEventListener('click', () => {location.reload(true)})})
		.catch((error) => {
		    console.error("Error adding document: ", error);
		});
};

const db = firebase.firestore();

// var docRef = db.collection("visitorsLog").doc(lastRegistryId);
const getLastRegistry = () => {
	db.collection("visitorsLog").doc(lastRegistryId).get().then(function(doc) {
	    if (doc.exists) {
	        console.log("Document data:", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
}


