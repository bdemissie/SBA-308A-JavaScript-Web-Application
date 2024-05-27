# SBA-308A-JavaScript-Web-Application

Overview
For this assignment, I developed web app that allows users to search for high-quality images from the Unsplash library based on keywords. The app retrieves images using the Unsplash API and displays them in a responsive grid layout.

Features

1. Image Search
   Users can enter keywords into the search input field and submit the form to search for images related to the specified keywords.

2. Image Display
   Search results are displayed as a grid of images, with each image represented by a clickable thumbnail. The grid layout adapts to different screen sizes for optimal viewing experience.

3. Clickable Thumbnails
   Users can click on any thumbnail to view a larger version of the image or perform additional actions.

Usage
To use the Unsplash Image Search web app:

Open the web app in a modern web browser.
Enter keywords into the search input field.
Press the "Search" button or hit Enter to perform the search.
View the search results displayed as a grid of thumbnail images.
Click on any thumbnail to view a larger version of the image on a separate page.

Technologies Used
The Image Search web app is built using the following technologies:

HTML/CSS: Provides the structure and styling for the web page layout.
JavaScript: Handles dynamic functionality and interaction with the Unsplash API.
Unsplash API: Provides access to a vast library of high-quality, royalty-free images.
axios API: Used for making HTTP requests to the Unsplash API to retrieve image data.
Responsive Design: Ensures the web app is accessible and functional across various devices and screen sizes.
Future Enhancements

CORS Error
When running the Unsplash Image Search web app directly from a local file system in a web browser (e.g., using a file:// URL), you may encounter a CORS (Cross-Origin Resource Sharing) error. This error occurs because the browser enforces security policies that restrict cross-origin requests for resources such as JavaScript files.

Resolution

1. Running a live server from VS code

2. Use a Browser Extension: Install a browser extension or plugin that temporarily disables CORS restrictions for local file access during development and testing.

Reflection

What could you have done differently during the planning stages of your project to make the execution easier?

    I was not aware at the begining that the Unsplash API only supportes the Get request. If I have to do this project again, I would select another public API that supports additonal requests than the Get request.

Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?

    As mentioned above, I was only able to implete a GET request in this project with the Unsplash API. This made it difficult to enable user manipulation of data within the API throught other methods such as POST, PUT, or PATCH.

What would you add to, or change about your application if given more time?

    Add user manipulation methods mentioned above
    Upgrade the styling for better visualization
