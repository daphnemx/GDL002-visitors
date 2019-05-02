const mainHeader = () => {
	const header = 
		createElement('header', { className: 'main-header', children: [
			createElement('a',{ href:'', children: [
				createElement('img', { src: 'http://claudiagarfias.works/contents/uploads/media/easylog.png'}) ] }) ] });
	
	return header;
}