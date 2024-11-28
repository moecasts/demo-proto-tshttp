import { createGreeterClient } from './helloworld/v1';
import { instance } from './instance';

export const greeterService = createGreeterClient((request) => {
  const API_PREFIX = 'http://127.0.0.1:8000';
  const url = `${API_PREFIX}/${request.path}`;

  return instance({
    url,
    method: request.method,
    data: request.body,
  });
});
