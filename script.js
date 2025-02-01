document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault();

    //Validación básica
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const messagge = document.getElementById('messagge').value;

    if (name && email && phone && subject && messagge){

        //Simulación de envío de formulario
        document.getElementById('successMessagge').style.display = 'block';
        //Resetear el formulario
        document.getElementById('contactForm').reset();
    }else {
        alert('Por favor, completa todos los campos obligatorios');
    }
});

