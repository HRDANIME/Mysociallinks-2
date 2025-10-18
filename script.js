document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION AREA ---

    // 1. Image URL for the background
    // For the image you provided, use: 'https://i.imgur.com/0vL2E2z.jpg'
    const imageUrl = 'https://pixvid.org/images/2025/10/01/U21y1.jpg'; // 👈 Replace with your image URL

    // 2. Button Configurations
    const buttonsConfig = [
        {
            name: 'Snapchat Profile Link', // 👈 Button text
            url: 'https://www.snapchat.com/add/hr234248' // 👈 Button link
        },
        {
            name: 'Instagram Profile Link',
            url: 'https://www.instagram.com/haryad_haryad12/'
        },
        {
            name: 'Telegram Profile Link',
            url: 'https://t.me/hrd_haroka'
        },
        // Add more buttons here by copying the format above
        {
            name: 'phone number link',
            url: 'tel:+9647516963435'
        }
    ];

    // --- END CONFIGURATION AREA ---


    // Get the HTML elements to modify
    const backgroundImageDiv = document.getElementById('backgroundImage');
    const buttonGroupDiv = document.getElementById('buttonGroup');

    // Set the background image
    backgroundImageDiv.style.backgroundImage = `url('${imageUrl}')`;

    // Generate buttons dynamically from the configuration
    buttonsConfig.forEach(button => {
        const anchor = document.createElement('a');
        anchor.href = button.url;
        anchor.textContent = button.name;
        anchor.target = '_blank'; // Open link in a new tab
        anchor.classList.add('profile-button');
        buttonGroupDiv.appendChild(anchor);
    });
});