FROM node:8
WORKDIR usr/src/testapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
