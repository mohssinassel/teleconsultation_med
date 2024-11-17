FROM node

WORKDIR /app/gateway

COPY package.json /app/gateway/package.json

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]