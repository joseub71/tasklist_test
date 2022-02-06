const axios = require('axios')
const constants = require('./constants')

exports.getTitles = async ()=>{
  try {
    console.log('Entrando en la funcion');
    const titlesApiUrl = constants.TITLES_API_URL
    const finalApiUrl = titlesApiUrl.replace('NUMBER', '3');
    console.log('URL final', finalApiUrl);

    return await axios.get(finalApiUrl)
  } catch (error) {
    console.error(error)
  }
};