
export default function fetchImages(query) {
    const accessKey = 'u5XLwX6VODQZVOFuq3KudcxEmdQnsrvrbhmO_7LqKj0'; // Replace with your Unsplash API access key
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=6&client_id=${accessKey}`;

    return axios.get(url)
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching images:', error);
            return [];
        });
}
