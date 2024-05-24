import axios from 'axios';

import { getDogsByBreed } from './api.js';

document.getElementById('search-button').addEventListener('click', async () => {
    const breed = document.getElementById('breed-search').value;
    const dogs = await getDogsByBreed(breed);
    displayDogs(dogs);
});

function displayDogs(dogs) {
    const gallery = document.getElementById('Search Image');
    gallery.innerHTML = '';
    dogs.forEach(dog => {
        const dogCard = document.createElement('div');
        dogCard.classList.add('dog-card');

        const dogImage = document.createElement('img');
        dogImage.src = dog.url;

        dogCard.appendChild(dogImage);
        gallery.appendChild(dogCard);
    });
}