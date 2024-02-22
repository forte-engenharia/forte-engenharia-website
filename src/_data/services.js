const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('https://forte-engenharia-github-io.onrender.com/api/servicos?populate=deep');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};