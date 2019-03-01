import axios from 'axios';

const url = 'http://localhost:7009/';
let token;

const feedMockData = [ { id: 5,
  address: 'Copenhagen',
  text: null,
  title: 'Huper',
  sub_title: null,
  price: null,
  date: '2019-02-28T22:52:05',
  date_to: '2019-03-21T22:52:05',
  category: 'Privite',
  organization: 'Bibob',
  organization_category: null,
  target_audience: null },
{ id: 10,
  address: 'Some event city',
  text: null,
  title: 'Moana',
  sub_title: null,
  price: null,
  date: '2019-03-01T09:58:42',
  date_to: '2019-03-01T09:58:42',
  category: 'Children',
  organization: 'Bibob',
  organization_category: null,
  target_audience: null } ];


const getUserAccount = async () => {
  try {
    const { data } = await axios.post(`${url}authenticate`, { user: 'mobile-app', password: '1234' });
    token = data.token;
  } catch(err) {
    console.log(err);
  }

}

const fetchFacets = async () => {
  const { data } = await axios.get(`${url}${'dev-token'}/fetch`, {
    params: {
      withFacets: true
    }
  });

  return data;
}

const fetchFeed = async () => {
  const {data} = await axios.get(`${url}${'dev-token'}/fetch`, {
    params: {
      pretty: true
    }
  })
  return data;
  
}
export {
  getUserAccount,
  fetchFeed,
  fetchFacets
}
