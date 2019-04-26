const contentDiv = document.getElementById('root');
contentDiv.classList.add('flex-column-log');

if (location.hash === '') {
	const backgroundVid = createElement('video', { className: 'background-vid', autoplay : true, muted: true, loop: true, src: 'https://claudiagarfias.works/contents/uploads/media/Busy-People.mp4' });
	// const logoSection = createElement('section', { className: 'logo-section',Z children: [
	// 	createElement('h1', { innerText: 'Registro de Visitantes' })
	// 	], });
	const menuSection = createElement('section', { className: 'flex-row-main-screen', children: [
		createElement('button', { innerText: 'Registrar Visitantes', className: 'getVisitors main-screen-btn' }),
		createElement('button', { innerText: 'Administración', className: 'getAdmin main-screen-btn' }),
		createElement('button', { innerText: 'Registrar Coworkers', className: 'getCoworkers main-screen-btn' })
		], });
	// backgroundVid.playbackRate = .25;
	contentDiv.innerHTML = backgroundVid.outerHTML + menuSection.outerHTML;
	
	document.querySelector('.getVisitors').addEventListener('click', () => {
		window.location = '#visitors';
		location.reload();
	});
}

//	//// VISITORS SCREEN //// //
else if (location.hash === '#visitors') {
	contentDiv.innerHTML = visitorsLog().outerHTML + loadPhotoDiv.outerHTML + registerBtn.outerHTML;

	const video = document.querySelector('.video');
	const canvas = document.querySelector('.canvas');
	const canvasContext = canvas.getContext('2d');
	const openCameraBtn = document.querySelector('.openCameraBtn');
	const takePhotoBtn = document.querySelector('.takePhotoBtn');
	const loadRegistryBtn = document.querySelector('.registerBtn');
	const photo = document.querySelector ('.load-img');

	video.style.display = 'none';
	canvas.style.display = 'none';
	takePhotoBtn.style.display = 'none';

	// Takes PHOTO and places it in IMG ELEMENT 'load-img' for write in document
	takePhotoBtn.addEventListener('click', () => {
		canvasContext.drawImage(video, 0, 0, 480, 480);
		photo.src = canvas.toDataURL("image/png");
		video.style.display = 'none';
		takePhotoBtn.style.display = 'none';

	});

	// Asks for permission to use camera and then STREAMS image on VIDEO ELEMENT
	openCameraBtn.addEventListener('click', () => {
		if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
			   	video.style.display = 'block';
		        video.srcObject = stream;
		        video.play();
		        takePhotoBtn.style.display = 'block';
				openCameraBtn.style.display = 'none';
		    });
		}

	});

	// WRITES FIREBASE DOCUMENT Visitor Registry
	loadRegistryBtn.addEventListener('click', () => {
		firebase.firestore().collection("visitorsLog").add(
			visitRegistry = { date: getDate(),
			time: getTime(),
			visitComments : document.querySelector('.visitComments').value,
			visitCompany : document.querySelector('.visitCompany').value,
			visitEmail : document.querySelector('.visitEmail').value,
			visitHost : document.querySelector('.visitHost').value,
			visitMaxTime : document.querySelector('.visitMaxTime').value,
			visitName : document.querySelector('.visitName').value,
			visitPhoto : photo.src }).
		then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id, visitRegistry);
		    location.reload(true);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	});
}
