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
				createElement('label', { innerText: '¿Quién es tu anfitrión?' }),
				createElement('select', { className: 'visitHost', children:
					[createElement('option', { value: '', innerText: 'Elige:' }),
					createElement('option', { value: 'patriciaga@protonmail.com', innerText: 'Patricia Garfias' }),
					createElement('option', { value: 'stuff@claudiagarfias.works', innerText: 'Otro Coworker' })] }),
				createElement('label', { innerText: '¿Cuál es tu Tiempo de Visita Máximo Estimado?' }),
				createElement('select', { className: 'visitMaxTime', children:
					[createElement('option', { value: '00:30', innerText: '00:30 min' }),
					createElement('option', { value: '01:00', innerText: '01:00 hrs' }),
					createElement('option', { value: '01:30', innerText: '01:30 hrs' }),
					createElement('option', { value: '02:00', innerText: '02:00 hrs' }),
					createElement('option', { value: '02:30', innerText: '02:30 hrs' }),
					createElement('option', { value: '03:00', innerText: '03:00 hrs' })] }),
				createElement('label', { innerText: 'Comentarios:' }),
				createElement('input', { className: 'visitComments' })],
		});
	return form;
};

const loadPhotoDiv = createElement('div', { 
	className: 'load-photo-div',
	children:[createElement('img', { src: "assets/kisspng-computer-icons.png", className: 'load-img' }),
			createElement('button', { className: 'takePhotoBtn' }),
			createElement('button', { innerText: 'Tomar Foto', className: 'openCameraBtn' }),
			createElement('video', { autoplay: true, className:'video' }),
			createElement('canvas', { width: '480', height: '480', className: 'canvas' })],
});

const registerBtn = createElement('button', { innerText: 'Registrarse', className: 'registerBtn' });

