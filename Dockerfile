FROM node:12.7-alpine 
WORKDIR /usr/src/app 
COPY package.json package-lock.json ./ 
RUN npm ci && npm install karma-cli
COPY . . 
ENTRYPOINT npm run test 