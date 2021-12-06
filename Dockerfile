FROM node:14 as prod

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 91

CMD [ "npm", "start" ]
