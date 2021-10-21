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
  serverUrl: 'http://52.204.92.226:5002',
  subPath: '',
  envName: 'PROD',
  API_URL: 'assets/api',
  clientUrl: `${baseUrl}`,
  adminUrl: 'http://184.72.227.41',
  appVersion: 'v717demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api'
};
