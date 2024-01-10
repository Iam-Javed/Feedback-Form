function submitForm(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    alert('Feedback submitted! Thank you!');
    

    document.getElementById('feedbackForm').style.display = 'none';
}
