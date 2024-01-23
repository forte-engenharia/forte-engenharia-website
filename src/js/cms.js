const getCMSContentByName = async (contentName) => {
  const response = await fetch(`${CMS_URL}/${contentName}?populate=*`);
  const { data } = await response.json();

  return { [contentName]: data };
}
