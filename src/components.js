const createElement = (tagName, opts = {}) => {
  const { children, ...rest } = opts;
  const element = Object.assign(
    document.createElement(tagName),
    rest,
  );

  if (children && typeof children.forEach === 'function') {
    children
      .filter(item => item)
      .forEach(element.appendChild.bind(element));
  }

  return element;
};

const getDate=()=> {
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

const newVisitorRegistry = () => { 
  // document.querySelector('.getVisitors').addEventListener('click', () => {
    window.location = '#visitors';
    location.reload();
};

const sendEmailNotification = () => {
  Email.send({
    SecureToken : "bfcd0384-8e4b-4639-9ad6-22a9c5fcfba9",
    To : visitRegistry.visitHost,
    From : "apps@claudiagarfias.works",
    Subject : `Tu invitado ${visitRegistry.visitName} acaba de llegar al Coworking 🙋🏢`,
    Body : `¡Hola ${visitRegistry.visitHost}!<br><br>
            ${visitRegistry.visitName} ya está en el lobby. ¡No lo hagas esperar demasiado! 🙂<br><br>
            Mensaje de tu invitado: "${visitRegistry.visitComments}".<br><br>
            El tiempo máximo para esta visita es: ${visitRegistry.visitMaxTime} hrs, por favor recuerda avisar al lobby cuando tu reunión haya terminado.<br><br>
            Gracias, saludos del equipo del Coworking.`
    }).then(
    message => contentDiv.innerHTML = logConfirmedView().outerHTML + `Mensaje ${message}`
    )};

module.exports = createElement;

// const render = (Component, target) => {
//   const child = Component({});
//   if (child) {
//     Object.assign(target, { innerHTML: '' });
//     target.appendChild(child);
//   }
// };

// const label = (props) => {
//   createElement('label', {
//   innerText: props.text,
// });
// };

// const input = (props) => {
//   createElement('input', {
//     placeholder: props.placeholder,
//   })
// };
