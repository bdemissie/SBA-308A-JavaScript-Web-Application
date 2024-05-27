// index.js
import { searchImages, uploadImage } from './imgurAPI.js';
import { displayImages, displayError } from './utilities.js';

document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('searchQuery').value;
    try {
        const data = await searchImages(query);
        if (data.success) {
            // Filter and display all valid images from the response
            const validItems = data.data.filter(item => item.images && item.images[0].type.startsWith('image/'));
            if (validItems.length > 0) {
                const imageUrls = validItems.map(item => item.images[0].link);
                displayImages(imageUrls);
            } else {
                displayError('No valid images found.');
            }
        } else {
            displayError('No images found.');
        }
    } catch (error) {
        displayError(error.message);
    }
});

document.getElementById('uploadButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('uploadImage');
    const file = fileInput.files[0];
    if (!file) {
        displayError('Please select an image to upload.');
        return;
    }
    try {
        const data = await uploadImage(file);
        if (data.success) {
            displayImages([data.data.link]);
        } else {
            displayError('Image upload failed. Please try again.');
        }
    } catch (error) {
        displayError(error.message);
    }
});
