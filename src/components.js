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

const sendEmailNotification = () => {
  Email.send({
    SecureToken : "bfcd0384-8e4b-4639-9ad6-22a9c5fcfba9",
    To : visitRegistry.visitHost,
    From : "apps@claudiagarfias.works",
    Subject : `Tu invitado ${visitRegistry.visitName} acaba de llegar al Coworking 🙋🏢`,
    Body : `¡Hola ${visitRegistry.visitHost}!<br><br>
            ${visitRegistry.visitName} te está esperando en el punto acordado.<br>
            Mensaje de tu invitado: ${visitRegistry.visitComments}.<br>
            El tiempo máximo para esta visita es: ${visitRegistry.visitMaxTime}, por favor recuerda avisar al lobby cuando tu reunión haya terminado.<br><br>
            Gracias, saludos.`
    }).then(
    message => alert(message)
  ).then( () => {location.reload(true);});
};

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
