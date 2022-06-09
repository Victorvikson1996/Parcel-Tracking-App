import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.ship24.com/public/v1/trackers/search/:trackingNumber',
  headers: {
    Authorization: 'Bearer apik_yyCvP5OMvWT68oVbQIz3cAVBfZKz7N',
  },
});

export const Options = {
  method: 'GET',
  baseURL: 'https://api.ship24.com/public/v1/trackers/search/:trackingNumber',
  headers: {
    Authorization: 'Bearer apik_yyCvP5OMvWT68oVbQIz3cAVBfZKz7N',
  },
};

const fetchTrack = async () => {
  const trackingNumber = 'S24DEMO456393';
  const response = await axios.get(
    `https://api.ship24.com/public/v1/trackers/search/${trackingNumber}`,
    Options,
  );
  return response.data;
  console.log(response.data);
};
