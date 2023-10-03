import axios from 'axios';

async function fetchUser(user: string) {
  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/users?username=' + user
    );
    return res.data;
  } catch (error) {
    throw new Error('API error');
  }
}

export default fetchUser;
