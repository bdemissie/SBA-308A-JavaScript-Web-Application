export default function displayImages(images) {
    const imageResults = document.getElementById('image-results');
    imageResults.innerHTML = ''; // Clear previous results
    images.forEach(image => {
        const imgContainer = createImageContainer(image);
        imageResults.appendChild(imgContainer);
    });
}

function createImageContainer(image) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    const imgElement = document.createElement('img');
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description || 'Unsplash Image';
    imgContainer.appendChild(imgElement);

    return imgContainer;
}
