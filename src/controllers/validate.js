import {readLinks} from './readLinks.js';
import {getAllLinksFile} from './getAllLinks.js';

export const validate = (links) => {
  const promises = links.map(link => {
    return readLinks(link.href)
      .then(response => {
        return (((response.status >= 200) && (response.status < 400))) ? 
          { ...link, status: response.status, statusMessage: 'OK'} : { ...link, status: response.status, statusMessage: 'FAIL'} ;
      });
  });

  return Promise.all(promises);
};

export const validates = (files) => {
  const promises = files.map(file => validate(getAllLinksFile(file)));
  return Promise.all(promises);
};