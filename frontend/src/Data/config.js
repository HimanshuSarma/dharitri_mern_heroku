const domain = document.domain;

export const base_url = (domain === 'localhost') ? `${domain}:3000` : 'https://dharitri.herokuapp.com';