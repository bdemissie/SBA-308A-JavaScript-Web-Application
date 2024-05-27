// utilities.js
export function displayImages(imageUrls) {
    const imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = '';
    imageUrls.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.style.width = '200px';
        imgElement.style.margin = '10px';
        imageResults.appendChild(imgElement);
    });
}

export function displayError(errorMessage) {
    const imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = errorMessage;
}
