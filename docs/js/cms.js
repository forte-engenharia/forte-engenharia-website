const getCMSContentByName = async (contentName) => {
  const response = await fetch(`${CMS_URL}/api/${contentName}?populate=*`);
  const { data } = await response.json();

  return { [contentName]: data };
}

const getCMSImageUri = (strapiImage) => {
  return `${CMS_URL}${strapiImage.data.attributes.url}`;
}