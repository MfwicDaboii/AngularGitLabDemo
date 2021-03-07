FROM node:12.7-alpine 
WORKDIR /usr/src/app 
COPY package.json package-lock.json ./ 
RUN npm ci 
COPY . . 
ENTRYPOINT npm run test 