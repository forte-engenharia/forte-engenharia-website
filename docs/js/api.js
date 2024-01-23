const getApiContentByName = async (contentName) => {
  const response = await fetch(`${CMS_URL}/${contentName}`);
  const { data: { data } } = response.json();

  return data;
}

setInterval(() => {
  console.log(siteData.from('clientes'));
}, 5000)