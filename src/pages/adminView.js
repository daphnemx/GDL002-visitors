const adminNav = () => {	
	const nav = createElement('nav', {
		className: 'admin-nav',
		children: [createElement('a', { innerText: ' Visitantes de Hoy |', href: '#admin' }),
		createElement('a', { innerText: ' Estadísticas ', href: '#' })],
		});
	return nav;
};
const adminTitle = () => {
	const title = createElement('h1', {innerText: `Registro de hoy: ${getDate()}`});
	return title
};

const todayVisitorsDiv = () => {
	const div = createElement( 'div', { 
		className: 'today-visitors-div',
		children: [createElement('img', {src:''}),
		createElement('h3',{})] }
	);
	return div;
}

// const adminView = () => {
// 	adminNav().outterHTML;
// 	adminTitle().outterHTML;
// 	todayVisitorsDiv().outterHTML;
// }