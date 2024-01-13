FROM node:latest

WORKDIR /app
USER root
COPY package*.json ./
COPY . . 

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

