import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50785102-9c13520f9ca563685942e67a3';

export async function getImagesByQuery(query, page) {
  const { data } = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return data;
}
