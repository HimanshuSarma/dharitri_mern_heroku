const domain = document.domain;
console.log(domain);

export const base_url = (domain === 'localhost:3000') ? domain : 'https://dharitri.herokuapp.com';