FROM node:10.16.0-alpine
# Create app directory
WORKDIR /usr/src/app
# copy dist and server js
COPY dist ./dist
COPY proxy.conf.json ./
COPY server.js ./
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install
COPY . .
EXPOSE 4200
CMD [ "npm", "start" ]

