FROM node

WORKDIR /app/doctors

COPY package.json package-lock.json /app/doctors/

RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm", "start"]