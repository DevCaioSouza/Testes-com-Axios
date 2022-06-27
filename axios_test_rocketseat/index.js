const axios = require('axios')

const url = ('https://jsonplaceholder.typicode.com/users/1')

function getUser(){
  axios.get(url)
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data)
    })
    .catch(err => console.log(err))
}

getUser()