FROM node:14.17.4-alpine3.14

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV


COPY ./front-end/package.json .
RUN npm install 

COPY ./front-end/ .

