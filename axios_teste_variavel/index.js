const axios = require("axios");
let dados;
const url = "https://api.github.com/users/topfunky";

function usuarioGithub(){
  return axios.get(url)
}

dados = usuarioGithub();

dados.then(function(resposta){
  console.log(resposta.data)
}).catch(function(error){
  if(error){
    console.log(error)
  }
})
