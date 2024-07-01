document.getElementById('cta-button').addEventListener('click', function() {
    alert('Obrigado pelo interesse! Em breve você saberá mais.');
});

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato!');
    this.reset();
});
