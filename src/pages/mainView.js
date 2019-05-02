const backgroundVid = createElement('video', { className: 'background-vid', autoplay : true, muted: true, loop: true, src: 'https://claudiagarfias.works/contents/uploads/media/coworking-background-video.mp4' });

const mainView = () => {
	const menuSection = createElement('section', { className: 'main-section', children: [
		createElement('div', { className: 'logo-section', children: [
		createElement('img', { className: 'main-logo', src:'http://claudiagarfias.works/contents/uploads/media/easylog.png' }),
		createElement('h2', { innerText:'Visitors Log Made Easy' })] }),
		createElement('div', {className: 'main-buttons flex-row-main-screen', children:[
			createElement('button', { innerText: 'Administración', className: 'getAdmin main-screen-btn' }),
			createElement('button', { innerText: 'Registrar Visitantes', className: 'getVisitors main-screen-btn' }),
			createElement('button', { innerText: 'Registrar Coworkers', className: 'getCoworkers main-screen-btn' })
			]})
		
		], });
	return menuSection;
}
