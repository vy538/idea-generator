import axios from 'axios';

const API_URL = 'your_backend_url';

export const getGalleryItems = async () => {
  // Implement when you have a backend
  const response = await axios.get(`${API_URL}/gallery-items`);
  return response.data;
};