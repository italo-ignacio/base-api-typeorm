export const api = {
  baseUrl: '/api/v1'
};

export enum statusCodeList {
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
  FORBIDDEN = 403,
  NOT_AUTHORIZED = 401,
  NOT_FOUND = 404,
  CREATED = 201,
  OK = 200,
  TIMEOUT = 408
}
