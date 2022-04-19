import axios from 'axios';

/**
 * Helper for calling axios services
 */
const Axios = async ({url, method, data = ''}) => {
  try {
    const result = await axios({
      method,
      url,
      ...(data && {data}),
      headers: {
        Accept: 'application/json,  text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        crossdomain: true,
      },
    });
    return {data: result.data};
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Error: ', 'Cancelling axios');
    }
    return {error};
  }
};

export default Axios;
