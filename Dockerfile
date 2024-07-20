FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# puerto de desarrollo
EXPOSE 8083

CMD ["yarn", "serve"]
