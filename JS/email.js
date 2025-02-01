(function(){
    emailjs.init("SEU_USER_ID"); // Substitua pelo seu User ID do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this)
        .then(function() {
            alert('Email enviado com sucesso!');
        }, function(error) {
            alert('Falha ao enviar o email: ' + JSON.stringify(error));
        });
});