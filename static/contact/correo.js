const btn = document.getElementById('btn1');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ag9x9ub';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviado';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Enviado';
      alert(JSON.stringify(err));
    });
});