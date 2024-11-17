FROM node

WORKDIR /app/notifications

COPY package.json package-lock.json /app/notifications/

RUN npm install

COPY . .

EXPOSE 8004

CMD ["npm", "start"]