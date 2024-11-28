import { greeterService } from './api/greeter';
import { HelloRequest } from './api/helloworld/v1';

const run = async () => {
  const payload: HelloRequest = { name: 'test' };

  const url = greeterService.uris.getSayHelloURI(payload);

  const data = await greeterService.sayHello(payload);

  console.log({ url, data });
};

run();
