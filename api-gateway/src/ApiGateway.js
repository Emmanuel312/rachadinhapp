import express from 'express';
import httpProxy from 'express-http-proxy';
import { AUTH_API, VACANCY_API } from './URLs';

class ApiGateway {
  constructor() {
    this.microservicesProxy = [];
    this.apiGateway = express();
    this.proxy();
    this.router();
  }

  proxy() {
    const microservices = [AUTH_API, VACANCY_API];
    this.microservicesProxy = microservices.map((microservice) => (
      { prefix: microservice.prefix, proxy: httpProxy(microservice.url) }));
  }

  router() {
    this.microservicesProxy.forEach(({ prefix, proxy }) => {
      this.apiGateway.use(prefix, (req, res, next) => proxy(req, res, next));
    });
  }

  run() {
    this.apiGateway.listen(3000, () => console.log('Api gateway running on port 3000'));
  }
}

export default new ApiGateway();
