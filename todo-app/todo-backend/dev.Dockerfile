FROM node:20

WORKDIR /app

COPY --chown=node:node . .

RUN npm install

USER node

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]