if (location.hash === '#visitors') {renderVisitorsScreen()};

const visitRegistry = {
	date: getDate(),
	time: getTime(),
	visitComments : document.querySelector('.visitComments').value,
	visitCompany : document.querySelector('.visitCompany').value,
	visitEmail : document.querySelector('.visitEmail').value,
	visitHost : document.querySelector('.visitHost').value,
	visitName : document.querySelector('.visitName').value,
	visitPhoto : document.querySelector('.load-img')
}

console.log(visitRegistry);
