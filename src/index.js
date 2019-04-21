if (location.hash === '#visitors') {renderVisitorsScreen()};


const loadPhotoBtn = document.querySelector('.loadPhotoBtn');
const loadRegistryBtn = document.querySelector('.registerBtn');
const photo = document.querySelector ('.load-img');
const visitComments = document.querySelector('.visitComments');
const visitCompany = document.querySelector('.visitCompany');
const visitEmail = document.querySelector('.visitEmail');
const visitHost = document.querySelector('.visitHost');
const visitName = document.querySelector('.visitName');

loadRegistryBtn.addEventListener('click', () => {
	firebase.firestore().collection("visitorsLog").add(
	visitRegistry = {
	date: getDate(),
	time: getTime(),
	visitComments : visitComments.value,
	visitCompany : visitCompany.value,
	visitEmail : visitEmail.value,
	visitHost : visitHost.value,
	visitName : visitName.value,
	visitPhoto : photo.src
	}).then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id, visitRegistry);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
});


