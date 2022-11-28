import axios from '@/config/axios';

const getLocation = async (): Promise<string> => {
  try {
    const response = await axios.get('https://ipapi.co/json');
    return response.data.country_code.toLowerCase() || 'id';
  } catch (e) {
    return 'id';
  }
};

export default getLocation;
