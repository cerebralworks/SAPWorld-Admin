// export const environment = {
//   production: true,
//   appVersion: 'v717demo1',
//   USERDATA_KEY: 'authf649fc9a5f55',
//   isMockEnabled: true,
//   apiUrl: 'api'
//   // apiUrl: 'mysite.com/api'
// };

let host = window.location.host;
let hostName = host.split(':');
const baseUrl = `${window.location.protocol}//${hostName[0]}`;
console.log(baseUrl);

export const environment = {
  production: true,
  //serverUrl: `${baseUrl}:5002`,
  serverUrl: 'https://api.sapworld.io:5002',
  subPath: '',
  envName: 'PROD',
  API_URL: 'assets/api',
  clientUrl: `${baseUrl}`,
  adminUrl: `${baseUrl}`,
  apiPath: 'https://api.sapworld.io:5003',
  app_url:'https://sapworld.io/',
  appVersion: 'v717demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api'
};
