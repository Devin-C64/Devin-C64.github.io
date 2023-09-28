window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_hi9ezox', 'template_b5stsld', this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Successfully submitted contact form")
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}