// imgurAPI.js
import { clientId } from './config.js';

export async function searchImages(query) {
    const url = `https://api.imgur.com/3/gallery/search/?q=${query}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Client-ID ${clientId}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw new Error('Failed to fetch images. Please try again.');
    }
}

export async function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);
    try {
        const response = await axios.post('https://api.imgur.com/3/image', formData, {
            headers: {
                'Authorization': `Client-ID ${clientId}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Failed to upload image. Please try again.');
    }
}
