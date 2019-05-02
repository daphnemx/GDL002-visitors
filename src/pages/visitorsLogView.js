const visitorsLogView = () => {	
	const form = createElement('form', {
		className: 'log-form flex-column-form',
		children: [createElement('h1', { innerText: 'Bienvenida(o) al Coworking' }),
				createElement('h2', { innerText: 'Por favor Ingresa tus Datos:' }),
				createElement('label', { innerText: 'Tu Nombre Completo:' }),
				createElement('input', { className: 'visitName' }),
				createElement('label', { innerText: 'Tu Email:' }),
				createElement('input', { className: 'visitEmail' }),
				createElement('label', { innerText: 'Empresa u Organización a la que Pertences:' }),
				createElement('input', { className: 'visitCompany' }),
				

				createElement('div', { className: 'selects', children:[
createElement('div', { className: 'left-select', children: [
	createElement('label', { innerText: '¿Quién es tu anfitrión?' }),
					createElement('select', { className: 'visitHost', children:
					[createElement('option', { value: '', innerText: 'Elige:' }),
					createElement('option', { value: 'patriciaga@protonmail.com', innerText: 'Patricia Garfias' }),
					createElement('option', { value: 'stuff@claudiagarfias.works', innerText: 'Otro Coworker' })] })
	] }),

createElement('div', { children: [
createElement('label', { innerText: 'Tiempo de Visita Máx:' }),
				createElement('select', { className: 'visitMaxTime', children:
					[createElement('option', { value: '00:30', innerText: '00:30 min' }),
					createElement('option', { value: '01:00', innerText: '01:00 hrs' }),
					createElement('option', { value: '01:30', innerText: '01:30 hrs' }),
					createElement('option', { value: '02:00', innerText: '02:00 hrs' }),
					createElement('option', { value: '02:30', innerText: '02:30 hrs' }),
					createElement('option', { value: '03:00', innerText: '03:00 hrs' })] })
	] })


				

					]}),

				


				createElement('label', { innerText: 'Comentarios:' }),
				createElement('input', { className: 'visitComments' })],
		});
	return form;
};

const loadPhotoDiv = createElement('div', { 
	className: 'load-photo-div',
	children:[createElement('img', { src: "assets/kisspng-computer-icons.png", className: 'load-img' }),
			createElement('button', { className: 'takePhotoBtn' }),
			createElement('button', { innerText: 'Tomar Foto', className: 'openCameraBtn green-button' }),
			createElement('video', { autoplay: true, className:'video' }),
			createElement('canvas', { width: '480', height: '480', className: 'canvas' })],
});

const registerBtn = createElement('button', { innerText: 'Registrarse', className: 'registerBtn green-button' });

let contentDivAdd = document.getElementById('root');

const loadPhotoAndRegistryBtn = () => { 
	contentDivAdd.innerHTML += loadPhotoDiv.outerHTML + registerBtn.outerHTML;

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

	const getVisitorRegistry = () => {
	visitRegistry = { date: getDate(),
			time: getTime(),
			visitComments : document.querySelector('.visitComments').value,
			visitCompany : document.querySelector('.visitCompany').value,
			visitEmail : document.querySelector('.visitEmail').value,
			visitExitTime :'',
			visitHost : document.querySelector('.visitHost').value,
			visitMaxTime : document.querySelector('.visitMaxTime').value,
			visitName : document.querySelector('.visitName').value,
			visitPhoto : photo.src };
	};


	// WRITES FIREBASE DOCUMENT Visitor Registry //
	loadRegistryBtn.addEventListener('click', () => {
		getVisitorRegistry();
		registerVisit();
		contentDiv.innerHTML = logConfirmedView().outerHTML + returnToVisitorsBtn().outerHTML;	    
	});
}
