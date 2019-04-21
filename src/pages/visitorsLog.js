const visitorsLog = () => {	
	const form = createElement('form', {
		className: 'log-form flex-column-form',
		children: [createElement('h1', { innerText: 'Bienvenida(o) al Coworking' }),
				createElement('h2', { innerText: 'Por favor Ingresa tus Datos:' }),
				createElement('label', { innerText: 'Tu Nombre Completo:' }),
				createElement('input', { className: 'visitName' }),
				createElement('label', { innerText: 'Email:' }),
				createElement('input', { className: 'visitEmail' }),
				createElement('label', { innerText: 'Empresa u Organización a la que Pertences:' }),
				createElement('input', { className: 'visitCompany' }),
				createElement('label', { innerText: 'Nombre Completo de tu Anfitrión:' }),
				createElement('input', { className: 'visitHost' }),
				createElement('label', { innerText: 'Comentarios:' }),
				createElement('input', { className: 'visitComments' })],

		});
	return form;
};

const loadPhotoDiv = createElement('div', { 
	className: 'load-photo-div flex-row',
	children:[createElement('img', { src: "http://claudiagarfias.works/contents/uploads/media/kisspng-computer-icons.png", className: 'load-img' }),
			createElement('button', { innerText: 'Tomar Foto', className: 'loadPhotoBtn' })
	],
});

const registerBtn = createElement('button', { innerText: 'Registrarse', className: 'registerBtn' });

const renderVisitorsScreen = () => {
	
	
}



