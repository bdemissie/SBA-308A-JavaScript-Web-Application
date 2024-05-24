import axios from 'axios';

const API_URL = 'https://api.thedogapi.com/v1';
const API_KEY = 'YOUR_API_KEY';  // Replace with your actual API key if needed

export async function getDogsByBreed(breed) {
    try {
        const response = await axios.get(`${API_URL}/images/search`, {
            params: { breed_id: breed, limit: 10 },
            headers: { 'x-api-key': API_KEY }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching dogs by breed:', error);
        return [];
    }
}