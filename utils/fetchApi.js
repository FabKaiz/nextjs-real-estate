import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchAPI = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '653eb347a9mshfd1fc1874ba0201p18239cjsnf362209b6c55'
      }
  });
  return data;
}