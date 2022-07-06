const domain = document.domain;
console.log(domain);

export const base_url = (domain === 'localhost') ? domain : 'https://dharitri.herokuapp.com';