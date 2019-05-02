const adminNav = () => {	
	const nav = createElement('nav', {
		className: 'admin-nav',
		children: [createElement('a', { innerText: ' Inicio |', href: '' }),
		createElement('a', { innerText: ' Visitantes de Hoy |', href: '#admin' }),
		createElement('a', { innerText: ' Registrar Coworker |', href: '#coworkers' }),
		createElement('a', { innerText: ' Registrar Visitante |', href: '#visitors' }),
		createElement('a', { innerText: ' Estadísticas ', href: '#' })],
		});
	return nav;
};
const adminTitle = () => {
	const title = createElement('h1', {className: 'admin-title', innerText: `Registro de hoy: ${getDate()}`});
	return title
};

// const todayVisitorsDiv = () => {
// 	const div = createElement( 'div', { 
// 		className: 'today-visitors-div',
// 		children: [createElement('img', {className:'visitorPhotoDOM',src:''}),
// 		createElement('h3',{})] }
// 	);
// 	return div;
// }



// const adminView = () => {
// 	adminNav().outterHTML;
// 	adminTitle().outterHTML;
// 	todayVisitorsDiv().outterHTML;
// }