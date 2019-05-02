const contentDiv = document.getElementById('root');
contentDiv.classList.add('flex-column-log');

// //// MAIN SCREEN //// //
if (location.hash === '') {

	contentDiv.style.display = "block";
	contentDiv.innerHTML = backgroundVid.outerHTML + mainView().outerHTML;
	document.querySelector('.getAdmin').addEventListener('click', () => {window.location = '#admin'});
	document.querySelector('.getVisitors').addEventListener('click', () => {window.location = '#visitors'});
	document.querySelector('.getCoworkers').addEventListener('click', () => {window.location = '#coworkers'});

}

//	//// VISITORS SCREEN //// //
else if (location.hash === '#visitors') {
	contentDiv.innerHTML = mainHeader().outerHTML + visitorsLogView().outerHTML;
	loadPhotoAndRegistryBtn();
}

//	//// COWORKERS SCREEN //// //
else if (location.hash === '#coworkers') {
	contentDiv.innerHTML = coworkersLogView().outerHTML;
	loadRegisterCoworker();
	cancelCoworkerRegistry();

}

// //// ADMINISTRATION SCREEN //// //
else if (location.hash === '#admin') {
	const header =  mainHeader();
	header.appendChild(adminNav());
	contentDiv.innerHTML = header.outerHTML;
	contentDiv.style.display = "block";
	contentDiv.innerHTML += adminTitle().outerHTML;
	getTodayVisitors(getDate);
	// contentDiv =+ todayVisitorsDiv().outerHTML;

}

// //// REGISTRY CONFIRMED SCREEN //// //
else if (location.hash === '#confirmed-visitor') {
	contentDiv.innerHTML = logConfirmedView().outerHTML;
			// getLastRegistry();
}

window.onpopstate = (event) => {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
  window.location.reload(true);
};