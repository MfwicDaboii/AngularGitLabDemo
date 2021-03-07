  FROM svaseghi/node-chrome:latest 
  WORKDIR /usr/src/app 
  COPY package.json package-lock.json ./ 
  RUN npm ci 
  COPY . . 
  ENV CHROME_BIN=/usr/bin/google-chrome 
  ENTRYPOINT ng test