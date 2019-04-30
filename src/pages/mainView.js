const backgroundVid = createElement('video', { className: 'background-vid', autoplay : true, muted: true, loop: true, src: 'https://claudiagarfias.works/contents/uploads/media/coworking-background-video.mp4' });

const mainView = () => {
	// const logoSection = createElement('section', { className: 'logo-section',Z children: [
	// 	createElement('h1', { innerText: 'Registro de Visitantes' })
	// 	], });
	const menuSection = createElement('section', { className: 'flex-row-main-screen', children: [
		createElement('button', { innerText: 'Registrar Visitantes', className: 'getVisitors main-screen-btn' }),
		createElement('button', { innerText: 'Administración', className: 'getAdmin main-screen-btn' }),
		createElement('button', { innerText: 'Registrar Coworkers', className: 'getCoworkers main-screen-btn' })
		], });
	// backgroundVid.playbackRate = .25;

	return menuSection;

}

