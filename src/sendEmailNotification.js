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
    })
  // .then(window.location = '#confirmed-visitor').then(location.reload())
};