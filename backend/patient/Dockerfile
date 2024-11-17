FROM node

WORKDIR /app/patients

COPY package.json package-lock.json /app/patients/

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]