const contentDiv = document.getElementById('root');
contentDiv.classList.add('flex-column-log');

// //// MAIN SCREEN //// //
if (location.hash === '') {
	contentDiv.innerHTML = backgroundVid.outerHTML + mainView().outerHTML;

	document.querySelector('.getVisitors').addEventListener('click', newVisitorRegistry);
	document.querySelector('.getCoworkers').addEventListener('click', newCoworkerRegistry);
	document.querySelector('.getAdmin').addEventListener('click', getAdmin);
}

//	//// VISITORS SCREEN //// //
else if (location.hash === '#visitors') {
	contentDiv.innerHTML = visitorsLogView().outerHTML;
	loadPhotoEtc();
}

// //// ADMINISTRATION SCREEN //// //
else if (location.hash === '#admin') {
	contentDiv.innerHTML = adminNav().outerHTML + adminTitle().outerHTML + todayVisitorsDiv().outerHTML;
	// contentDiv =+ todayVisitorsDiv().outerHTML;

}

// //// REGISTRY CONFIRMED SCREEN //// //
else if (location.hash === '#confirmed-visitor') {
	contentDiv.innerHTML = logConfirmedView().outerHTML;
			// getLastRegistry();
}

else if (location.hash === '#coworkers') {
	contentDiv.innerHTML = '';
}

window.onpopstate = (event) => {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
  window.location.reload();
};