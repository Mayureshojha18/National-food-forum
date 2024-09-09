document.getElementById('welcome-btn').addEventListener('click', function() {
    // Show the message after clicking the welcome button
    const messageElement = document.getElementById('message');
    
    if (messageElement.classList.contains('hidden')) {
        messageElement.classList.remove('hidden');
    }

    
});
