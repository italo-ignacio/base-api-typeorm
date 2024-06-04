FROM node:18.15.0-alpine3.16

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./ 

RUN npm install --omit=dev

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]
