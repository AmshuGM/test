FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --save bcryptjs && npm uninstall --save bcrypt

COPY . .

# CMD ["npm", "run", "dev"]
CMD ["node", "index.js"]
