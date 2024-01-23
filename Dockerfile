FROM node:14.17.5
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
