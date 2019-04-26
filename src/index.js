const contentDiv = document.getElementById('root');
contentDiv.classList.add('flex-column-log');

// //// MAIN SCREEN //// //
if (location.hash === '') {
	contentDiv.innerHTML = backgroundVid.outerHTML + mainView().outerHTML;
	
	document.querySelector('.getVisitors').addEventListener('click', () => {
		window.location = '#visitors';
		location.reload();
	});

	document.querySelector('.sendEmail').addEventListener('click', sendEmailNotification);

}

//	//// VISITORS SCREEN //// //
else if (location.hash === '#visitors') {
	contentDiv.innerHTML = visitorsLogView().outerHTML + loadPhotoDiv.outerHTML + registerBtn.outerHTML;

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

	// Takes PHOTO and places it in IMG ELEMENT 'load-img' for write in document
	takePhotoBtn.addEventListener('click', () => {
		canvasContext.drawImage(video, 0, 0, 480, 480);
		photo.src = canvas.toDataURL("image/png");
		video.style.display = 'none';
		takePhotoBtn.style.display = 'none';

	});

	// Visitor Registry OBJECT //
	const getVisitorRegistry = () => {
	visitRegistry = { date: getDate(),
			time: getTime(),
			visitComments : document.querySelector('.visitComments').value,
			visitCompany : document.querySelector('.visitCompany').value,
			visitEmail : document.querySelector('.visitEmail').value,
			visitHost : document.querySelector('.visitHost').value,
			visitMaxTime : document.querySelector('.visitMaxTime').value,
			visitName : document.querySelector('.visitName').value,
			visitPhoto : photo.src };
	};

	// WRITES FIREBASE DOCUMENT Visitor Registry //
	loadRegistryBtn.addEventListener('click', () => {
		getVisitorRegistry();
		registerVisit();
	});
}
