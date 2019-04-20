const visitorsLog = () => {	
	const form = createElement('form', {
		className: 'log-form flex-column-form',
		children: [createElement('h1', { innerText: '¡Bienvenida(o) Visitante!' }),
				createElement('h2', { innerText: 'Por favor Ingresa tus Datos:' }),
				createElement('label', { innerText: 'Tu Nombre Completo:' }),
				createElement('input', { className: 'visitName' }),
				createElement('label', { innerText: 'Email:' }),
				createElement('input', { className: 'visitEmail' }),
				createElement('label', { innerText: 'Empresa u Organización a la que Pertences:' }),
				createElement('input', { className: 'visitCompany' }),
				createElement('label', { innerText: 'Nombre Completo de tu Anfitrión:' }),
				createElement('input', { className: 'visitHost' })],
		});
	return form;
};

const loadPhotoDiv = createElement('div', { 
	className: 'load-photo-div flex-column-form',
	children:[createElement('img', { src: "http://claudiagarfias.works/contents/uploads/media/kisspng-computer-icons-waiter-user-profile-5b093110750377.2144367115273290404793.png", className: 'load-img' }),
			createElement('button', { innerText: 'Tomar Foto', className: 'loadPhotoBtn' })
	],
});

const loadPhotoBtn = document.querySelector('.loadPhotoBtn');
const registerBtn = createElement('button', { innerText: 'Registrarse', className: 'registerBtn' });

const contentDiv = document.getElementById('root');
contentDiv.classList.add('flex-column-log');
contentDiv.innerHTML = visitorsLog().outerHTML + loadPhotoDiv.outerHTML + registerBtn.outerHTML;

const visitRegistry = {
	visitName : document.querySelector('.visitName').value,
	visitEmail : document.querySelector('.visitEmail').value,
	visitCompany : document.querySelector('.visitCompany').value,
	visitHost : document.querySelector('.visitHost').value,
	visitPhoto : document.querySelector('.load-img')
}

console.log(visitRegistry);

