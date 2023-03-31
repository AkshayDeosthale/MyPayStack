export type CONFIGDATA_TYPE = {
  environment: string;
  API_URL: string;
};

let CONFIGDATA: CONFIGDATA_TYPE = {
  environment: '',
  API_URL: '',
};

switch (process.env.NEXT_PUBLIC_ENVIRONMENT) {
  case 'dev':
    CONFIGDATA = {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      API_URL: 'http://localhost:9000',
    };
    break;
  case 'stage':
    CONFIGDATA = {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      API_URL: 'http://localhost:9000',
    };

    break;
  case 'prod':
    CONFIGDATA = {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      API_URL: 'http://localhost:9000',
    };
    break;

  default:
    break;
}

export default CONFIGDATA;
