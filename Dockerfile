FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

# CMD ["npm", "run", "dev"]
CMD ["node", "index.js"]