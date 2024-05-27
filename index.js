import fetchImages from './fetchImages.js';
import displayImages from './displayImages.js';

document.getElementById('search-form').addEventListener('submit', function (e) {

    // Prevent default form submission 
    e.preventDefault();

    // Capture the search term input to a variable
    const searchTerm = document.getElementById('search-input').value;

    // Call the fetchImages() function to place a axios get request to the unsplash API and to then display the resulting images

    fetchImages(searchTerm)
        .then(images => displayImages(images));
});
