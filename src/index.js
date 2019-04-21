const contentDiv = document.getElementById('root');
contentDiv.classList.add('flex-column-log');

<<<<<<< HEAD
if (location.hash === '') {
	const a = createElement('button', { innerText: 'Registro de Visitantes', className: 'getVisitors main-screen-btn' });
	contentDiv.innerHTML = a.outerHTML;
	document.querySelector('.getVisitors').addEventListener('click', () => {
		window.location = '#visitors';
		location.reload();
	});
}

else if (location.hash === '#visitors') {
	contentDiv.innerHTML = visitorsLog().outerHTML + loadPhotoDiv.outerHTML + registerBtn.outerHTML;
	const loadPhotoBtn = document.querySelector('.loadPhotoBtn');
	const loadRegistryBtn = document.querySelector('.registerBtn');

	loadRegistryBtn.addEventListener('click', () => {
		firebase.firestore().collection("visitorsLog").add(
			visitRegistry = { date: getDate(),
			time: getTime(),
			visitComments : document.querySelector('.visitComments').value,
			visitCompany : document.querySelector('.visitCompany').value,
			visitEmail : document.querySelector('.visitEmail').value,
			visitHost : document.querySelector('.visitHost').value,
			visitName : document.querySelector('.visitName').value,
			visitPhoto : document.querySelector ('.load-img').src }).
		then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id, visitRegistry);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
=======
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
>>>>>>> 2899bd643996e2bab474337ca2c1599c4a60ea10
	});
}



