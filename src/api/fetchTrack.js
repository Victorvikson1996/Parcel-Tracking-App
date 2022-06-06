import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.ship24.com/public/v1/trackers/search/:trackingNumber',
  headers: {
    Authorization: 'Bearer apik_yyCvP5OMvWT68oVbQIz3cAVBfZKz7N',
  },
});
