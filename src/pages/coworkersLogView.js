const coworkersLogView = () => {	
	const form = createElement('form', {
		className: 'coworkers-log-form flex-column-form',
		children: [createElement('h1', { innerText: 'Registro de Coworkers' }),
				createElement('h2', { innerText: 'Por favor Ingrese los Datos:' }),
				createElement('label', { innerText: 'Nombre Completo:' }),
				createElement('input', { className: 'coworkerName' }),
				createElement('label', { innerText: 'Email:' }),
				createElement('input', { className: 'coworkerEmail' }),
				createElement('label', { innerText: 'Empresa u Organización:' }),
				createElement('input', { className: 'coworkerCompany' }),
				createElement('label', { innerText: 'Comentarios:' }),
				createElement('input', { className: 'coworkerComments' }),
				createElement('button', { innerText: 'Registrar Coworker', className: 'registerCoworkerBtn' }),
				createElement('button', { innerText: 'Cancelar', className: 'cancelRegistryBtn' })]	});
	return form;
};

const getCoworkerRegistry = () => {
	// contentDivAddCoworking.innetHTML += registerCoworkerBtn;

	coworkerRegistry = { date: getDate(),
			time: getTime(),
			coworkerComments : document.querySelector('.coworkerComments').value,
			coworkerCompany : document.querySelector('.coworkerCompany').value,
			coworkerEmail : document.querySelector('.coworkerEmail').value,
			coworkerName : document.querySelector('.coworkerName').value
			// coworkerPhoto : photo.src 
		};



	};


const loadRegisterCoworker = () => {
	const registerCoworkerBtn = document.querySelector('.registerCoworkerBtn');
	registerCoworkerBtn.addEventListener('click',()=>{
		console.log('que onda')
		getCoworkerRegistry();
		registerCoworker(getCoworkerRegistry);
		contentDiv.innerHTML = logConfirmedView().outerHTML + returnToCoworkersBtn().outerHTML;
	});
}

const cancelCoworkerRegistry = () => {
	const cancelBtn = document.querySelector('.cancelRegistryBtn');
	cancelBtn.addEventListener('click', ()=>{
		window.location.hash = '';
		location.reload(true);
	})
}