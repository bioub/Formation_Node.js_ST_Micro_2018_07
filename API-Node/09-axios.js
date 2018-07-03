const axios = require('axios');

axios.get('http://www.google.fr/')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log(err));

/*
(async () => {
  try {
    const res = await axios.get('http://www.google.fr/');
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
})();
*/

/*
(async () => {
  const res = await axios.get('http://www.google.fr/');
  console.log(res.data);
})().catch((err) => console.log(err));;
*/
