// submit contact form modal 
function submitForm() {
    console.log('Form submitted');
    // Show the modal after form submission
    $('#thanksModal').modal('show');
    // Reset the form fields
    document.getElementById('contactForm').reset();
}

// update the slider values in snapshot page
function updateSliderValue(sliderId, spanId) {
    var slider = document.getElementById(sliderId);
    var valueSpan = document.getElementById(spanId);
    valueSpan.textContent = slider.value;
}
