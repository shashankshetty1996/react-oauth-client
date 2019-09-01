import config from '../config/config';
import { constructQueryParams } from '../utils/utils';

const AUTH_SERVER_TOKEN_URL = config.AUTH_SERVER_URL;
const RESOURCE_SERVER = config.RESOURCE_SERVER_URL;

const clientID = config.CLIENT_ID;
const redirectURI = config.REDIRECT_URI;

export const getLoginUrl = () => {
  return `${AUTH_SERVER_TOKEN_URL}/authorize?${constructQueryParams({
    clientID,
    redirectURI,
  })}`;
};

export const userDetails = `${RESOURCE_SERVER}/api/user`;
