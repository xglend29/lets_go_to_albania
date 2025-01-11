// script.js

// Share functionality
document.getElementById("shareButton").addEventListener("click", function () {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this website!',
            text: 'I found this amazing website and thought you might like it!',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Your browser does not support the Share API!');
    }
});




document.querySelector('.back-button').addEventListener('click', () => {
  
});

document.querySelector('.next-button').addEventListener('click', () => {
   
});


