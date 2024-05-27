

// Function to display images on the web page
export default function displayImages(images) {
    // Get the element where images will be displayed
    const imageResults = document.getElementById('image-results');
    // Clear previous results
    imageResults.innerHTML = '';

    // Iterate through each image in the array
    images.forEach(image => {
        // Create a container for the image
        const imgContainer = createImageContainer(image);
        // Append the image container to the parent element
        imageResults.appendChild(imgContainer);
    });
}

// Function to create a container for each image
function createImageContainer(image) {
    // Create a new div element to hold the image
    const imgContainer = document.createElement('div');
    // Add a class to the container for styling purposes
    imgContainer.classList.add('image-container');

    // Create an img element for the image
    const imgElement = document.createElement('img');
    // Set the source of the image to the small version of the image URL
    imgElement.src = image.urls.small;
    // Set the alt attribute of the image to the image's alt description, or a default value if not provided
    imgElement.alt = image.alt_description || 'Unsplash Image';

    // Make the image clickable to view a larger version
    imgElement.addEventListener('click', () => {
        window.open(image.urls.full, '_blank');
    });

    // Append the image element to the container
    imgContainer.appendChild(imgElement);

    // Return the container element
    return imgContainer;
}


