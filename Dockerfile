FROM node:18.4

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY ./build .

EXPOSE 3000
CMD [ "node", "app.js" ]