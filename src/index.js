const contentDiv = document.getElementById('root');
contentDiv.classList.add('flex-column-log');

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
	const video = document.querySelector('.video');
	const canvas = document.querySelector('.canvas');
	const context = canvas.getContext('2d');
	const takePhotoBtn = document.querySelector('.takePhotoBtn');
	const loadRegistryBtn = document.querySelector('.registerBtn');
	const photo = document.querySelector ('.load-img');

	canvas.style.display = 'none';
	// video.style.display = 'none';
	
	takePhotoBtn.addEventListener('click', () => {
		context.drawImage(video, 0, 0, 640, 480);
		photo.src = canvas.toDataURL("image/png");

	});

	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
	        //video.src = window.URL.createObjectURL(stream);
	        video.srcObject = stream;
	        video.play();
	    });
	}

	loadRegistryBtn.addEventListener('click', () => {
		firebase.firestore().collection("visitorsLog").add(
			visitRegistry = { date: getDate(),
			time: getTime(),
			visitComments : document.querySelector('.visitComments').value,
			visitCompany : document.querySelector('.visitCompany').value,
			visitEmail : document.querySelector('.visitEmail').value,
			visitHost : document.querySelector('.visitHost').value,
			visitName : document.querySelector('.visitName').value,
			visitPhoto : photo }).
		then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id, visitRegistry);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	});
}
