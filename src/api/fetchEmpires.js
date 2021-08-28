import axios from 'axios';

const url = 'https://arcane-temple-01740.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

export default function fetchEmpires() {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((res) => {
        resolve(res.data.civilizations);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
