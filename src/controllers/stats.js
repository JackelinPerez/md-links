export const stats = (dataLinks) => {
  let saveUnike = [];
  const links = dataLinks.map(dataLink => dataLink.href);

  if (links[0] !== undefined) {
    const unikeLinks = links.reduce((objLinks, link) => {
      objLinks[link] = (objLinks[link] || 0) + 1;
      return objLinks;
    }, {});
    saveUnike = Object.keys(unikeLinks);
  }
  return (links[0] !== undefined) ? 
    {file: dataLinks[0].file, total: links.length, unique: saveUnike.length} : {file: dataLinks[0].file, total: 0, unique: 0};
};