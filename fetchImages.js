
export default function fetchImages(searchTerm) {

    // The Unsplash API is a powerful tool for accessing a vast library of high-quality, royalty-free images. It provides developers with programmatic access to millions of photos contributed by the Unsplash community. See documentations for key features and functionalities

    // You will need to signup to upsplash.com and create your own Unsplash API access key 

    const accessKey = 'u5XLwX6VODQZVOFuq3KudcxEmdQnsrvrbhmO_7LqKj0'; // Replace with your Unsplash API access key
    
    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=6&client_id=${accessKey}`;

    return axios.get(url)
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching images:', error);
            return [];
        });
}
