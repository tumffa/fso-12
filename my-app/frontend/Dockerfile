FROM node:18

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

# Ensure node_modules/.bin is in the PATH
ENV PATH=/app/node_modules/.bin:$PATH

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "5173"]