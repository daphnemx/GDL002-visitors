const logConfirmedView = () => {	
	const confirmationSection = createElement('section', {
		className: 'log-confirmation flex-column-form',
		children: [createElement('h3', { innerText: 'Registro Exitoso' }),
				createElement('p', { innerText: `¡Bienvenid@!` })],
		});
	return confirmationSection;
};

const returnToVisitorsBtn = () => {
	let returnBtn = createElement('button', { innerText: 'Nuevo Registro', className: 'getVisitors green-button' });
	return returnBtn;
}

const returnToCoworkersBtn = () => {
	let returnBtn = createElement('button', { innerText: 'Nuevo Registro', className: 'getCoworkers green-button' });
	return returnBtn;
}