import axios from 'axios';

axios.defaults.baseURL = 'https://650739353a38daf4803f45ac.mockapi.io/';


export const getCars = async (page) => {
  try {
    const path = `/adverts?completed=false&page=${page}&limit=8`;
    const res = await axios.get(path);
    return res.data;
  } catch (e) {
    return console.log(e.message);
  }
};

export const getAllCars = async () => {
  try {
    const path = `/adverts`;
    const res = await axios.get(path);
    return res.data;
  } catch (e) {
    return console.log(e.message);
  }
};



