import axios from 'axios';
// import empires from './empires';

// export default function fetchEmpires() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(empires.civilizations);
//     }, 5000);
//   });
// }

const url = 'https://arcane-temple-01740.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

// export default function fetchEmpires() {
//   return new Promise((resolve, reject) => {
//     fetch(url, { mode: 'no-cors'  })
//       .then((res) => {
//         if (!res.ok) throw new Error(`Api responded with ${res.status}`);
//         return res.json();
//       })
//       .then((json) => {
//         resolve(json.civilizations);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// export default function fetchEmpires() {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('get', url);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         try {
//           const response = JSON.parse(xhr.response);
//           resolve(response.civilizations);
//         } catch (err) {
//           reject(err);
//         }
//       } else {
//         reject(xhr.response);
//       }
//     };

//     xhr.send();
//   });
// }

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
