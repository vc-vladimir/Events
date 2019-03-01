import axios from 'axios';

const url = 'http://localhost:7009/';
let token;

const getUserAccount = async () => {
  try {
    const { data } = await axios.post(`${url}authenticate`, { user: 'mobile-app', password: '1234' });
    token = data.token;
  } catch(err) {
    console.log(err);
  }

}

const fetchFacets = () => {
  axios.get(`${url}${token}/fetch`, {
    params: {
      withFacets: true
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

const fetchFeed = () => {
  axios.get(`${url}${token}/feed`, {
    params: {
      withFacets: true
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}
export {
  getUserAccount,
  fetchFeed,
  fetchFacets
}
