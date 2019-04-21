if (location.hash === '#visitors') {renderVisitorsScreen()};

const loadPhotoBtn = document.querySelector('.loadPhotoBtn');
const loadRegistryBtn = document.querySelector('.registerBtn');
const photo = document.querySelector ('.load-img');

loadRegistryBtn.addEventListener('click', () => {
	firebase.firestore().collection("visitorsLog").add(
		visitRegistry = { date: getDate(),
		time: getTime(),
		visitComments : document.querySelector('.visitComments').value,
		visitCompany : document.querySelector('.visitCompany').value,
		visitEmail : document.querySelector('.visitEmail').value,
		visitHost : document.querySelector('.visitHost').value,
		visitName : document.querySelector('.visitName').value,
		visitPhoto : photo.src }).
	then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id, visitRegistry);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
});


