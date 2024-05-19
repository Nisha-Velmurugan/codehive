FROM node:14

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

