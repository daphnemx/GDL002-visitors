const logConfirmedView = () => {	
	const confirmationSection = createElement('section', {
		className: 'log-confirmation flex-column-form',
		children: [createElement('h3', { innerText: 'Tu visita ha sido registrada exitosamente' }),
				createElement('p', { innerText: `¡Adelante!` })],
		});
	return confirmationSection;
};

const returnToVisitorsBtn = () => {
	let returnBtn = createElement('button', { innerText: 'Nuevo Registro', className: 'getVisitors' });
	return returnBtn;
}