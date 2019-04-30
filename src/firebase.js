firebase.initializeApp({
	apiKey: "AIzaSyATd_NEeul67on2O3YhMTmgVmjFmKtYKm8",
	authDomain: "visitors-registration.firebaseapp.com",
	databaseURL: "https://visitors-registration.firebaseio.com",
	projectId: "visitors-registration",
	storageBucket: "visitors-registration.appspot.com",
	messagingSenderId: "573685055395"
});

const getDate =()=> {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;
    return today;
};

const getTime = () => {
   let today = new Date();
   let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
   return time;
};

const db = firebase.firestore();
let lastRegistryId = '';

const registerVisit = (getVisitorRegistry) => {
	db.collection("visitorsLog").add(visitRegistry)
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

const getTodayVisitors = (getDate) => {
	let date = getDate();
	db.collection("visitorsLog").where("date", `==`, `${date}`)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

};