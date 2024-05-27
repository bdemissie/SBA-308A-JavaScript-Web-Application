import fetchImages from './fetchImages.js';
import displayImages from './displayImages.js';

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    fetchImages(searchTerm)
        .then(images => displayImages(images));
});
