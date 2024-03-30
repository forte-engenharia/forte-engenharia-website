const { default: axios } = require('axios');

const singleTypes = ['contato', 'contato-secao', 'pagina-inicial', 'servicos-pagina', 'sobre'];

const fetchSingleType = async (singleType) => {
  try {
    const res = await axios.get(`https://forte-engenharia-github-io.onrender.com/api/${singleType}?populate=deep`);
    return { [singleType]: res.data.data.attributes };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { singleTypes, fetchSingleType };