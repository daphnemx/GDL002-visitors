firebase.initializeApp({
	apiKey: "AIzaSyATd_NEeul67on2O3YhMTmgVmjFmKtYKm8",
	authDomain: "visitors-registration.firebaseapp.com",
	databaseURL: "https://visitors-registration.firebaseio.com",
	projectId: "visitors-registration",
	storageBucket: "visitors-registration.appspot.com",
	messagingSenderId: "573685055395"
});

const getDate =()=> {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;
    return today;
};

const getTime = () => {
   let today = new Date();
   let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
   return time;
};

const db = firebase.firestore();
let lastRegistryId = '';

const registerVisit = (getVisitorRegistry) => {
	db.collection("visitorsLog").add(visitRegistry)
		.then((docRef) => {
		    lastRegistryId = docRef.id;
		    console.log("Document written with ID: ", lastRegistryId, visitRegistry);
		    sendEmailNotification()})
		.then(() => {
			const returnBtn = document.querySelector('.getVisitors');
			returnBtn.addEventListener('click', () => {location.reload(true)})})
		.catch((error) => {
		    console.error("Error adding document: ", error);
		});
};

// var docRef = db.collection("visitorsLog").doc(lastRegistryId);
const getLastRegistry = () => {
	db.collection("visitorsLog").doc(lastRegistryId).get().then(function(doc) {
	    if (doc.exists) {
	        console.log("Document data:", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
}

let todayVisitorsObj = {};
// const visitorPhotoDOM = document.querySelector('.visitorPhotoDOM');

const getTodayVisitors = (getDate) => {
	db.collection("visitorsLog").where("date", `==`, `${getDate()}`)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

        	let todayVisitorDiv = createElement('div',
                { className: 'visitor-div-container', children: 
                [createElement('div', { id: `visitorDiv:${doc.id}`,className: 'todayVisitorsDivDOM',
                        children: [ createElement('img', { src: `${doc.data().visitPhoto}` }),
                                    createElement('table', { className: 'visitor-table', 
                                        children:[createElement('tr', { className:'left-column-vt', 
                                                children:[createElement('td', { innerText: 'ID:' }),
                                                    createElement('td', { innerText: 'Fecha:' }),
                                                    createElement('td', { innerText: 'Hora de ingreso:' }),
                                                    createElement('td', { innerText: 'Hora de salida:' }),
                                                    createElement('td', { innerText: 'Nombre del Visitante:' }),
                                                    createElement('td', { innerText: 'Email:' }),
                                                    createElement('td', { innerText: 'Empresa u Organización:' }),
                                                    createElement('td', { innerText: 'Anfitrión:' }),
                                                    createElement('td', { innerText: 'Tiempo de visita seleccionado:' }),
                                                    createElement('td', { innerText: 'Comentarios:'})] }),
                                                createElement('tr', { className:'right-column-vt', 
                                                children:[createElement('td', { innerText: `${doc.id}` }),
                                                    createElement('td', { innerText: `${doc.data().date}` }),
                                                    createElement('td', { innerText: `${doc.data().time}` }),
                                                    createElement('td', { innerText: `${doc.data().visitExitTime}` }),
                                                    createElement('td', { innerText: `${doc.data().visitName}` }),
                                                    createElement('td', { innerText: `${doc.data().visitEmail}` }),
                                                    createElement('td', { innerText: `${doc.data().visitCompany }`}),
                                                    createElement('td', { innerText: `${doc.data().visitHost}` }),
                                                    createElement('td', { innerText: `${doc.data().visitMaxTime}` }),
                                                    createElement('td', { innerText: `${doc.data().visitComments}` })] })] }),
                                    createElement('button', { className: 'setTimeBtn', innerText: 'Ingresar Hora de Salida' })] })
                ] });

            contentDiv.innerHTML += todayVisitorDiv.outerHTML;
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());


        });

        querySnapshot.forEach(function(doc) {
            let id = doc.id;
            let visitorDiv = document.getElementById(`visitorDiv:${doc.id}`);
            if (visitorDiv) {
            const setTimeBtn = document.querySelector('.setTimeBtn');
            setTimeBtn.addEventListener('click', ()=>{
                let setExitTime = db.collection('visitorsLog').doc(id);
                return setExitTime.update({
                    visitExitTime: getTime()
                })
                                    .then(function() {
                        console.log("Document successfully updated!");
                        location.reload();
                    })
                    .catch(function(error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });

            })
            }

            // const setExitTime = () => {
            //     let id = document.querySelector('#doc-id').innerText;
            //     let setWithMerge = db.collection('visitorsLog').doc(id).set({
            //         visitExitTime: getTime()
            //     }, { merge: true });

            // // }
            
            // setTimeBtn.addEventListener('click', setExitTime)
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // const id = doc.id;

            




            // console.log(id);

        });
        
    })
        


    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
};


// const setExitTime = () => {
//     db.collection("visitorsLog").where("date", `==`, `${getDate()}`)
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             // console.log(doc.id, " => ", doc.data());
//             // const id = doc.id;
//             var setWithMerge = db.collection('visitorsLog').doc(doc.id).set({
//                 visitExitTime: getTime()
//             }, { merge: true });

//             // console.log(id);

//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });


// }
