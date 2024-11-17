FROM node

WORKDIR /app/appointments

COPY package.json package-lock.json /app/appointments/

RUN npm install

COPY . .

EXPOSE 8003

CMD ["npm", "start"]