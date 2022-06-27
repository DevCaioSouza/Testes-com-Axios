const axios = require("axios");

// const url = "https://api.github.com/users/topfunky";

// axios.get(url)
//   .then(function (res) {
//     console.log(res.data);
//   })
//   .catch(function (error) {
//     if (error) {
//       console.log(error);
//     }
//   });

// os mais usados: res.headers, res.data, res.status
const urlJSON = "https://jsonplaceholder.typicode.com/posts";

axios.post(urlJSON).then(function (resposta) {
  console.log(resposta.data);
});

