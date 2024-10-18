FROM node:20

WORKDIR /app

COPY --chown=node:node . .

RUN npm ci

USER node

CMD npm start