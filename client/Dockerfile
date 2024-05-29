FROM node:16-slim

WORKDIR /usr/client

COPY package*.json ./

RUN rm -rf node_modules package-lock.json

RUN npm install

COPY . .

ENV PORT=5173

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]