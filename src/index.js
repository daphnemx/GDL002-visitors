if (location.hash === '#visitors') {renderVisitorsScreen()};

const visitRegistry = {
	visitName : document.querySelector('.visitName').value,
	visitEmail : document.querySelector('.visitEmail').value,
	visitCompany : document.querySelector('.visitCompany').value,
	visitHost : document.querySelector('.visitHost').value,
	visitPhoto : document.querySelector('.load-img')
}

console.log(visitRegistry);
